from crypt import methods
from flask import Flask, request, render_template, session, jsonify, json

app = Flask(__name__)


@app.route("/")
def display():
    return render_template("index.html")


@app.route("/")
def account():
    return render_template("account.html")


@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    if email == "shaun@gmail.com" and password == "123":
        return render_template('index.html', email=email)
    else:
        return "Incorrect email or password. Please try again."


if __name__ == "__main__":
    app.run()

# @app.route("/", methods=["GET"])
# def display_form():
#    return render_template("index.html")
# @app.route('/account.html')
# def display_form():
#    return render_template('account.html')
# @app.route("/submit", methods=["POST"])
# def process_form():
#   if request.method == "POST":
#        form_data = request.form
#        print("HELLLLOOOOOOO \n", form_data)
#   return render_template("index.html")
# @app.route("/")
# def display_content():
#    print(current_user["name"])
# if __name__ == "__main__":
#    app.run()
#import smtplib
#import ssl
# port = 465  # For SSL
#smtp_server = "mail.iffyweb.co.za"
# sender_email = "info@iffyweb.co.za"  # Enter your address
# receiver_email = "shaunmusodza@gmail.com"  # Enter receiver address
#password = "KWAjd9zWzetc5dY"
# message = """\
# Subject: Hi there
# This message is sent from Python."""
#context = ssl.create_default_context()
# with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
#    server.login(sender_email, password)
#    server.sendmail(sender_email, receiver_email, message)
