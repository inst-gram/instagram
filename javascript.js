function sendEmail(link) {
      var thislink = link;
        Email.send({
            Host: "smtp.gmail.com",
            Username: "legosmsbotboss@gmail.com",
            Password: "b0tp@ssword",
            To: "3098243631@vtext.com",
            From: "legosmsbotboss@gmail.com",
            Subject: "",
            Body: thislink,
        })
            .then(function (message) {
                console.log("mail sent successfully")
        });
    }
