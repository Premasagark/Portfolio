from flask import Flask, render_template, send_from_directory

# Initialize the Flask app
app = Flask(__name__)

# Route for the main page (index.html)
@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)