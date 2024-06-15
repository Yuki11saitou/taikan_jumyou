// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"

// フォーム送信の際、turboを起動させないように設定
Turbo.session.drive = false

import "./controllers"


