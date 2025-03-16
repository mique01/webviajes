from flask import Flask
from routes.profile import profile_bp
from routes.activities import activities_bp

app = Flask(__name__)
app.register_blueprint(profile_bp, url_prefix='/api/profile')
app.register_blueprint(activities_bp, url_prefix='/api/activities')

if __name__ == '__main__':
    app.run(debug=True)
