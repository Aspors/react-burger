import styles from "./profile.module.css";
import ProfileTabs from "../../components/profile/profile-tabs/profile-tabs";
import ProfileForm from "../../components/profile/profile-form/profile-form";

const Profile = () => {
  return (
    <div className={styles["profile-container"]}>
      <ProfileTabs />
      <ProfileForm />
    </div>
  );
};

export default Profile;
