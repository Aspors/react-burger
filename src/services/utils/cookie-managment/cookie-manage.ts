const setCookie = (
  name: string,
  value: string | null,
  props?: { expires: number | Date | string }
) => {
  props = props || { expires: 20 };
  value = value && value.split("Bearer ")[1];
  let exp = props.expires;
  if (exp && typeof exp === "number") {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000 * 60);
    exp = props.expires = d;
  }
  if (
    exp &&
    typeof exp !== "number" &&
    typeof exp !== "string" &&
    exp.toUTCString
  ) {
    props.expires = exp.toUTCString();
  }
  if (typeof value === "string") value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    // @ts-ignore
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
};

function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        // eslint-disable-next-line
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name: string) {
  setCookie(name, null, { expires: -1 });
}

export { setCookie, getCookie, deleteCookie };
