export default async (req, res) => {
  const method = req.method;
  switch (method) {
    case 'POST': {
      try {
        return res
          .writeHead(200, {
            'Set-Cookie': 'token=',
            'Content-Type': 'text/plain',
          })
          .end();
      } catch (error) {
        console.log(error);
      }
    }
    default: {
      return res.end();
    }
  }
};
