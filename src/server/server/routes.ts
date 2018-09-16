import * as koaBody from 'koa-body';
import * as Router from 'koa-router';
import * as Mailgun from 'mailgun-js';

const router = new Router();

// "SmtpUserName": "oh no",
// "SmtpPassword": "not telling you that",
// "SmtpClientHost": "smtp.sendgrid.net",
// "SmtpClientPort": "587",
// "PrayerResponseEmailSubject": "Thankyou for your prayer request",
// "PrayerRequestEmailSubject": "Prayer request",
// "PrayerResponseEmailFilePathText": "Content/prayerResponse.txt",
// "PrayerResponseEmailFilePathHtml": "Content/prayerResponse.html"

const apiKey = process.env.APPSETTINGS_API_KEY; // long guid from mailgun
const domain = process.env.APPSETTINGS_DOMAIN; // eg 'mg.priou.co.uk';
const prayerRequestFromEmail = process.env.APPSETTINGS_PRAYER_REQUEST_FROM_EMAIL;

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
router.post('/api/PrayerRequest', koaBody(), async (ctx, next) => {
    // Invokes the method to send emails given the above data with the helper library
    try {
        const { email, prayFor } = ctx.request.body;

        if (!apiKey || !domain) {
            throw new Error('APPSETTINGS_API_KEY and / or APPSETTINGS_DOMAIN not configured');
        }

        // We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
        const mailgun = new Mailgun({ apiKey, domain });

        const data = {
            from: prayerRequestFromEmail,
            to: email,
            subject: 'Please could you pray for me',
            text: `Hi,\n\nI'd love it if you could pray for me about this: ${prayFor}`
        };

        await mailgun.messages().send(data);
        ctx.body = { ok: true, text: 'Thanks for sending your prayer request - we will pray.' };
    } catch (exc) {
        console.error(exc.message);

        ctx.body = {
            success: false,
            text: 'Your prayer request has not been sent - please try mailing: ' + '_props.PrayerRequestEmailAddress'
        };
    }
});

export const routes = router.routes();
