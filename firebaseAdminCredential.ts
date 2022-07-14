import admin, { ServiceAccount } from "firebase-admin";

const firebaseAdminCredential = {
  credential: admin.credential.cert({
    type: process.env.FIREBASE_ADMIN_CONFIG_type,
    project_id: process.env.FIREBASE_ADMIN_CONFIG_project_id,
    private_key_id: process.env.FIREBASE_ADMIN_CONFIG_private_key_id,
    private_key: process.env.FIREBASE_ADMIN_CONFIG_private_key?.replace(
      /\\n/gm,
      "\n"
    ), // https://github.com/gladly-team/next-firebase-auth/discussions/95#discussioncomment-473663
    client_email: process.env.FIREBASE_ADMIN_CONFIG_client_email,
    client_id: process.env.FIREBASE_ADMIN_CONFIG_client_id,
    auth_uri: process.env.FIREBASE_ADMIN_CONFIG_auth_uri,
    token_uri: process.env.FIREBASE_ADMIN_CONFIG_token_uri,
    auth_provider_x509_cert_url:
      process.env.FIREBASE_ADMIN_CONFIG_auth_provider_x509_cert_url,
    client_x509_cert_url:
      process.env.FIREBASE_ADMIN_CONFIG_client_x509_cert_url,
  } as ServiceAccount),
};

export default firebaseAdminCredential;
