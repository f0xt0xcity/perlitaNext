import React from 'react'

const Messenger = () => {
  return (
    <>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="Perla-la-tapatia"
        agent-id="a9aa81bd-f188-4d26-b30d-96f30111fc82"
        chat-icon = "/img/myAvatar.png"
        language-code="es"
      ></df-messenger>
    </>
  )
}

export default Messenger