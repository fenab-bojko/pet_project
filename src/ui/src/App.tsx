import Content from "./components/Content/Content"
import Header from "./components/Header/Header"
import Modal from "./components/Modal/Modal"
import { useCallback, useState } from "react";
import { setAnswer } from '../backend/lib/data';


function App() {

  const [showModal, setShowModal] = useState(false);
  const openModal = useCallback(() => setShowModal(true), [])
  
  const sendQuestion  = (question: string, language: string, skill: string, answer: string, name: string) => {
    if (question && name === 'admin' && answer) {
      setAnswer(question, language, skill, answer);
      setShowModal(false);
    } else {
      setShowModal(false);
    }
    
  }

//  Вытащить из модалки данные и передать их в setAnswer

  return (
  <>
    <Modal visible={showModal} onSendQuestion={ sendQuestion } />
    <Header />
    <Content onAddQuestion={openModal} />
  </>
  )
}

export default App
