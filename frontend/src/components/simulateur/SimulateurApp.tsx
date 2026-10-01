"use client";

import { useMemo, useState } from "react";
import SimulateurForm, { type SimFormState } from "@/components/simulateur/SimulateurForm";
import SimulateurResults from "@/components/simulateur/SimulateurResults";
import { simuler, simulerDepuisTJM, tjmNecessairePourNet } from "@/lib/simulateur/calc";
import type { SimulateurCopyData } from "@/lib/content/simulateur";

const INITIAL_STATE: SimFormState = {
  mode: "tjm",
  tjm: 500,
  ca: 9500,
  netCible: 3500,
  jours: 19,
  fraisGestion: 7,
  fraisPro: 0,
  situation: "celibataire",
  parts: 1,
};

export default function SimulateurApp({ copy }: { copy: SimulateurCopyData }) {
  const [form, setForm] = useState<SimFormState>(INITIAL_STATE);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  function handleChange(patch: Partial<SimFormState>) {
    setForm((prev) => ({ ...prev, ...patch }));
  }

  const { res, tjmNecessaire } = useMemo(() => {
    if (form.mode === "tjm") {
      return {
        res: simulerDepuisTJM(form.tjm, form.jours, form.fraisGestion, form.fraisPro, form.parts),
        tjmNecessaire: null,
      };
    }
    if (form.mode === "ca") {
      return {
        res: simuler({
          chiffreAffaires: form.ca,
          fraisGestion: form.fraisGestion,
          fraisProfessionnels: form.fraisPro,
          nbParts: form.parts,
        }),
        tjmNecessaire: null,
      };
    }
    const tjmNec = tjmNecessairePourNet(form.netCible, form.jours, form.fraisGestion);
    return {
      res: simulerDepuisTJM(tjmNec, form.jours, form.fraisGestion, form.fraisPro, form.parts),
      tjmNecessaire: tjmNec,
    };
  }, [form]);

  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[340px_1fr]">
      <SimulateurForm
        state={form}
        onChange={handleChange}
        advancedOpen={advancedOpen}
        onToggleAdvanced={() => setAdvancedOpen((v) => !v)}
        onSubmit={() => {
          document.getElementById("simulateur-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        copy={copy}
      />
      <div id="simulateur-tabs">
        <SimulateurResults res={res} tjmNecessaire={tjmNecessaire} copy={copy} />
      </div>
    </div>
  );
}
