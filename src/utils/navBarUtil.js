export const userNavStyle = () => {
  // Check if user is on Safari
  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    return "activeNavSafari"
  } else {
    return "activeNav"
  }
}
