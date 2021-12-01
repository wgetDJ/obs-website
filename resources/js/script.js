// Download Button
const linuxBtn = document.querySelector('.linuxDownload');
const macosBtn = document.querySelector('.macosDownload');
const windowsBtn = document.querySelector('.windowsDownload');
const generalBtn = document.querySelector('.generalDownload');


// detecting os
const getOS = () => {
  	let userAgent = window.navigator.userAgent,
	      platform = window.navigator.platform,
	      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
	      os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

  return os;
}


linuxBtn.style.display = 'none';
macosBtn.style.display = 'none';
windowsBtn.style.display = 'none';
generalBtn.style.display = 'none';

// Displaying download button

switch (getOS()) {
	case 'Linux':
		linuxBtn.style.display = 'block';
		break;
	case 'Mac OS':
		macosBtn.style.display = 'block';
		break;
	case 'Windows':
		windowsBtn.style.display = 'block';
		break;
	default:
		generalBtn.style.display = 'block';
}


// Feature tabs
const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabValue);

		tabs.forEach(eachTab => {
			eachTab.classList.remove('active');
		});
		tab.classList.add('active');

		tabInfos.forEach(tabInfo => {
			tabInfo.classList.remove('active-block');
		});
		target.classList.add('active-block');
	});
});