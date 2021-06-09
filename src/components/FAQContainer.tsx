import { useState } from "react"

const questions = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    question: "How can i request a new browser?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]

const FAQContainer = () => {
  const [opened, setOpened] = useState<Number | null>(null)

  return (
    <section>
      <div className="section-container">
        <div className="text-container">
          <div className="text-container--title center small">
            Frequently Asked Questions
          </div>
          <div className="text-container--description center">
            Here are some of our FAQs. If you have any other questions you`d
            like answered please feel free to email us.
          </div>
        </div>
        <div className="section-container__questions">
          {questions.map(({ question, answer, id }) => {
            const isOpened = opened === id
            return (
              <div className="question-container" key={id}>
                <div
                  className="question"
                  onClick={() => setOpened(isOpened ? null : id)}
                >
                  <div className="question--title">{question}</div>
                  <div
                    className={`question--icon ${isOpened ? "close" : ""}`}
                  ></div>
                </div>
                <div className={`answer ${isOpened ? "show" : ""}`}>
                  {answer}
                </div>
              </div>
            )
          })}
        </div>
        <button>More Info</button>
      </div>
    </section>
  )
}

export default FAQContainer
