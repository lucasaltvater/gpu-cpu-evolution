const btnNvidia = document.getElementById("btnNvidia");
const btnAmd = document.getElementById("btnAmd");
const nvidia = document.getElementById("nvidia");
const amd = document.getElementById("amd");

btnNvidia.addEventListener("click", () => {
  nvidia.classList.add("active");
  amd.classList.remove("active");
  btnNvidia.classList.add("active");
  btnAmd.classList.remove("active");
});

btnAmd.addEventListener("click", () => {
  amd.classList.add("active");
  nvidia.classList.remove("active");
  btnAmd.classList.add("active");
  btnNvidia.classList.remove("active");
});
// Alternar entre Intel e AMD CPUs
const btnIntel = document.getElementById("btnIntel");
const btnCpuAmd = document.getElementById("btnCpuAmd");
const intel = document.getElementById("intel");
const cpuAmd = document.getElementById("cpuAmd");

btnIntel.addEventListener("click", () => {
  intel.classList.add("active");
  cpuAmd.classList.remove("active");
  btnIntel.classList.add("active");
  btnCpuAmd.classList.remove("active");
});

btnCpuAmd.addEventListener("click", () => {
  cpuAmd.classList.add("active");
  intel.classList.remove("active");
  btnCpuAmd.classList.add("active");
  btnIntel.classList.remove("active");
});
