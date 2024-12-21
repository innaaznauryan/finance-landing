import ai from "/assets/images/future/ai.png"
import futureAnalytics from "/assets/images/future/analytics.png"
import apps from "/assets/images/future/apps.png"
import futureConvertor from "/assets/images/future/convertor.png"
import crypto from "/assets/images/future/crypto.png"
import email from "/assets/images/future/email.png"
import invoice from "/assets/images/future/invoice.png"
import management from "/assets/images/future/management.png"

interface FutureFeature {
  id: number;
  name: string;
  src: string;
}

export const futureFeatures: FutureFeature[] = [
  {id: 17, name: "crypto", src: crypto},
  {id: 18, name: "convertor", src: futureConvertor},
  {id: 19, name: "ai", src: ai},
  {id: 20, name: "invoice", src: invoice},
  {id: 21, name: "apps", src: apps},
  {id: 22, name: "analytics", src: futureAnalytics},
  {id: 23, name: "email", src: email},
  {id: 24, name: "management", src: management},
]
