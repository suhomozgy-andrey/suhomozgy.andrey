import photo from "./assets/images/photo.jpeg";
import linkedinLogo from "./assets/images/linkedin.svg";
import facebookLogo from "./assets/images/facebook.svg";

import styles from "./App.module.scss";

const App = () => (
	<div className={styles.App}>
		<img className={styles.Photo} src={photo} alt="Andrei Sukhomozgii" />
		<p>Andrei Sukhomozgii - Frontend Engineer</p>
		<div className={styles.Socials}>
			<a href="https://www.linkedin.com/in/suhomozgyandrey/">
				<img
					src={linkedinLogo}
					alt="Andrei Sukhomozgii - LinkedIn"
					width="32"
					height="32"
				/>
			</a>
			<a href="https://www.facebook.com/profile.php?id=100000774672688">
				<img
					src={facebookLogo}
					alt="Andrei Sukhomozgii - Facebook"
					width="32"
					height="32"
				/>
			</a>
		</div>
	</div>
);

export default App;
