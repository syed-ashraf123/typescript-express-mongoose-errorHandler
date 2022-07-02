import { Document } from "mongoose";
export default interface UserInterface extends Document {
  u_active_wallet: String;
  u_wallets: Object;
  u_wallet_address: String;
  u_wallet_designated: Boolean;
  sb_user_id: String;
  sb_session: Object;
  u_roles: Object;
  u_name: String;
  u_email: String;
  u_discord: String;
  u_twitter: String;
  u_telegram: String;
  p_ids: Array;
  p_outstanding: Object;
  p_holder: Array;
  p_profile_pic: String;
}
