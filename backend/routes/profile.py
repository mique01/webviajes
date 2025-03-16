from flask import Blueprint, request, jsonify

profile_bp = Blueprint('profile', __name__)

# Para propósitos de demostración se utiliza un almacenamiento en memoria.
# En producción se debe utilizar una base de datos.
user_profiles = {}

@profile_bp.route('/', methods=['POST'])
def create_profile():
    data = request.get_json()
    # Se utiliza un "user_id" por defecto o se puede enviar uno en el JSON.
    user_id = data.get('user_id', 'default')
    user_profiles[user_id] = data
    return jsonify({'message': 'Perfil creado/actualizado', 'data': data}), 201
