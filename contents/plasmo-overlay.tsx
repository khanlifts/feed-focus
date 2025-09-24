import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/*"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="feed-focus-overlay">
      <h2 className="feed-focus-title">Feed Focus</h2>

      <div className="switch-item">
        <label className="switch-label">Hide Notifications</label>
        <span>🟢</span>
      </div>

      <div className="switch-item">
        <label className="switch-label">Hide Messages</label>
        <span>🟢</span>
      </div>

      <div className="switch-item">
        <label className="switch-label">Hide Feed</label>
        <span>🟢</span>
      </div>
    </div>
  )
}
export default PlasmoOverlay
