OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '690359932275-th5fj4uu630t2rgm0budes1h24jvlgst.apps.googleusercontent.com', 'fr8YEMJ2TG813t9UJ__wPraZ', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end