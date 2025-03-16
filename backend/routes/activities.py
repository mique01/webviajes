from flask import Blueprint, request, jsonify

activities_bp = Blueprint('activities', __name__)

# Datos simulados de actividades según destino.
activities_data = {
    "default": [
        {"nombre": "Tour por la ciudad", "precio": 30, "duracion": "2h"},
        {"nombre": "Cena local", "precio": 50, "duracion": "3h"}
    ],
    "paris": [
        {"nombre": "Tour por la Torre Eiffel", "precio": 40, "duracion": "1.5h"},
        {"nombre": "Crucero por el Sena", "precio": 60, "duracion": "2h"}
    ]
}

@activities_bp.route('/', methods=['GET'])
def get_activities():
    destination = request.args.get('destination', 'default').lower()
    activities = activities_data.get(destination, activities_data["default"])
    return jsonify({
        'destination': destination,
        'activities': activities
    })
