import axios from 'axios';



export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      const response = await axios.post(
        `https://usX.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members`,
        {
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            Authorization: `{MAILCHIMP_API_KEY}`,
          },
        }
      );

      return res.status(200).json({ message: 'Success' });
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};