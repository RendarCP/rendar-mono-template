module.exports = {
  extends: ["./base.js", "next/core-web-vitals"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
};
