from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome to the Marathon Of Hope Foundation Canada</title>
      </head>
      <body>
        <h1>Hello, Replit!</h1>
        <p>This is a simple Flask app running on Replit!</p>
      </body>
    </html>