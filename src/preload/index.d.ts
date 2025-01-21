import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
      electronAPI: {
        CloseApp: () => void ,
        FullScreen : () => void ,
        HideScreen:()=> void ,
      };
  }
}
