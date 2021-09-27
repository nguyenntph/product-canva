export const refreshTokenSetup = (res, saveSession) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuth = await res.reloadAuthResponse();
    refreshTiming = (newAuth.expires_in || 3600 - 5 * 60) * 1000;
    saveSession(newAuth.profileObj);

    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
