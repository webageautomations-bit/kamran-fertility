export const hubHref = "/services/fertility-treatment";

export const treatments = [
  { slug: "ivf", label: "IVF Treatment", blurb: "Eggs and sperm are fertilized in the laboratory and an embryo is transferred to the uterus." },
  { slug: "icsi", label: "ICSI Treatment", blurb: "A single sperm is injected into an egg, mainly when sperm factors make standard IVF unreliable." },
  { slug: "iui", label: "IUI Treatment", blurb: "Prepared sperm is placed in the uterus at ovulation, when the tubes are open and sperm quality allows." },
  { slug: "fet", label: "Frozen Embryo Transfer (FET)", blurb: "Frozen embryos are thawed and transferred in a cycle prepared for the uterine lining." },
  { slug: "pgt", label: "Embryo Genetic Testing (PGT)", blurb: "Embryos are tested for chromosomal or inherited conditions before transfer, in selected cases." },
  { slug: "ovulation-induction", label: "Ovulation Induction & PCOS", blurb: "Medication and monitoring to restore ovulation in PCOS and other cycle problems." },
  { slug: "male-infertility", label: "Male Infertility Treatment", blurb: "Testing and treatment for low sperm count, azoospermia, varicocele and hormonal causes." },
  { slug: "fertility-preservation", label: "Egg & Sperm Freezing", blurb: "Freezing eggs or sperm before cancer treatment, surgery or planned delay." },
];

export const treatmentHref = (slug) => `${hubHref}/${slug}`;
