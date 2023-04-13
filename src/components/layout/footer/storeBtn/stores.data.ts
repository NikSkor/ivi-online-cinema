import { IStore } from "@/interfaces/footer/IStore";

export const storesList: IStore[]  = [
  {linkURL: "https://apps.apple.com/RU/app/id455705533?mt=8", imgURL: "../appleLogo.svg", caption: "App Store", preamble: "Загрузить в"},
  {linkURL: "https://play.google.com/store/apps/details?id=ru.ivi.client&referrer=af_tranid%3D_Er2Ds54rjX836P3grtGIQ%26shortlink%3DdevicesAndroid%26c%3DdevicesAndroid%26pid%3DWebsite+ivi%26source_caller%3Dui&pli=1", imgURL: "../googlePlayLogo.svg", caption: "Google Play", preamble: "Доступно в"},
  {linkURL: "https://www.ivi.tv/pages/tvsmart/", imgURL: "../smartTVLogo.svg", caption: "Smart TV", preamble: "Смотрите на"},
  {linkURL: "https://www.ivi.tv/devices", imgURL: "../devicesIcon.svg", caption: "Все устройства"},
]