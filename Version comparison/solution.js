// BEGIN (write your solution here)
const compareVersion = (version1, version2) => {
    const majorMinorVersion = (str) => str.split('.');
    let result = 0;
    for (let i = 0; i < majorMinorVersion(version1).length; i += 1) {
      if (parseInt(majorMinorVersion(version1)[i]) > parseInt(majorMinorVersion(version2)[i])) {
        return result += 1;
      }
      if (parseInt(majorMinorVersion(version1)[i]) < parseInt(majorMinorVersion(version2)[i])) {
        return result -= 1;
      }
    }
    return result;
  };
  export default compareVersion;
  // END