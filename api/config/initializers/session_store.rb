# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_teste_studio_forma_session',
  :secret      => 'a1aef6ca1ed8ff1728c9c48a713f4e0879659e49bb14d6d74c5ae4f353efdfaff9581a021512009d391905945e24fcb435b9d9296cfcc711848e4b48d7d95934'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
