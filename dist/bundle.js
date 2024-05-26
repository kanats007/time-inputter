const L = function() {
  const s = ":", v = /[0-9]{2}:[0-5][0-9]/, h = /[0-9]{1,2}:[0-9]{1,2}/, S = /[0-9]{2}/, R = "input.time-input";
  let c = "", u = "", l = !1, a = !1;
  document.querySelectorAll(R).forEach((e) => {
    const t = e;
    A(t.defaultValue) || (t.defaultValue = `00${s}00`), M(t.type) || (t.type = "text"), t.addEventListener("input", C), t.addEventListener("focus", k), t.addEventListener("click", E), t.addEventListener("dblclick", E), t.addEventListener("keydown", x);
  });
  function A(e) {
    return v.test(f(e));
  }
  function H(e) {
    return e === null ? !1 : S.test(f(e));
  }
  function M(e) {
    return e === "text";
  }
  function x(e) {
    if (e.code !== "ArrowRight" && e.code !== "ArrowLeft" && e.code !== "ArrowUp" && e.code !== "ArrowDown")
      return;
    const t = document.activeElement, i = t.selectionStart ?? 0;
    i <= 2 && t.setSelectionRange(3, 5), 3 <= i && t.setSelectionRange(0, 2), d(t), e.preventDefault();
  }
  function E(e) {
    const t = document.activeElement, i = t.selectionStart ?? 0;
    if (i <= 2) {
      t.setSelectionRange(0, 2);
      return;
    }
    if (3 <= i) {
      t.setSelectionRange(3, 5);
      return;
    }
    e.preventDefault(), d(t);
  }
  function C() {
    const e = document.activeElement, t = f(e.value);
    if (!_(t)) {
      e.value = (c.length === 1 ? "0" + c : c) + s + (u.length === 1 ? "0" + u : u), e.setSelectionRange(0, 2);
      return;
    }
    const i = H(e.getAttribute("maxHour")) ? e.getAttribute("maxHour") : "99", { inputHours: n, inputMinutes: o } = g(t), m = t.search(s), p = e.selectionStart ?? 0;
    if (p <= m)
      if (!l && n.length === 1)
        e.value = "0" + n + s + o, l = !0, c = n, u = o, e.setSelectionRange(0, 2);
      else {
        const r = n.length === 2 ? n : c + n;
        e.value = (Number(i) < Number(r) ? "00" : r) + s + o, l = !1, c = r, u = o, e.setSelectionRange(3, 5);
      }
    if (m < p)
      if (!a && o.length === 1)
        e.value = n + s + "0" + o, a = !0, c = n, u = o, e.setSelectionRange(3, 5);
      else {
        const r = o.length === 2 ? o : u + o;
        e.value = n + s + (60 <= Number(r) ? "00" : r), a = !1, c = n, u = r, e.setSelectionRange(0, 2);
      }
  }
  function _(e) {
    return !(5 < e.length || !h.test(e));
  }
  function k() {
    const e = document.activeElement;
    e.setSelectionRange(0, 2), d(e);
  }
  function g(e) {
    const t = e.search(s), i = e.slice(0, t), n = e.slice(t + 1);
    return {
      inputHours: i === "" ? "00" : i,
      inputMinutes: n === "" ? "00" : n
    };
  }
  function f(e) {
    return e = e.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(t) {
      return String.fromCharCode(t.charCodeAt(0) - 65248);
    }), e;
  }
  function d(e) {
    const { inputHours: t, inputMinutes: i } = g(e.value);
    c = t, u = i, l = !1, a = !1;
  }
}();
export {
  L as default
};
