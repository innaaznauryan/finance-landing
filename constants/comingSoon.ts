import analytics from "/assets/images/comingSoon/analytics.png"
import control from "/assets/images/comingSoon/control.png"
import convertor from "/assets/images/comingSoon/convertor.png"
import language from "/assets/images/comingSoon/language.png"
import roles from "/assets/images/comingSoon/roles.png"
import taxes from "/assets/images/comingSoon/taxes.png"

interface ComingSoonFeature {
  id: number;
  name: string;
  src: string;
}

export const comingSoonFeatures: ComingSoonFeature[] = [
  {id: 11, name: "analytics", src: analytics},
  {id: 12, name: "control", src: control},
  {id: 13, name: "convertor", src: convertor},
  {id: 14, name: "language", src: language},
  {id: 15, name: "roles", src: roles},
  {id: 16, name: "taxes", src: taxes},
]
