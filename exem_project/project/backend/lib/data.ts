
export async function fetchAdd () {
        const url = 'http://localhost:3000/answers'
        let response = await fetch(url)
        let data = await response.json()
        return data
}


export async function sortQuestions (type: string, skill: string) {
        let data = await fetchAdd();
        const result = [];
        if (type === 'questions'){
                data.map(elem => {
                      if (elem.skill === skill) {
                        result.push(elem);
                      }  
                })
        }
        if (type) {
                data.map(elem => {
                        if(elem.languege === type && elem.skill === skill ) {
                                result.push(elem);
                        }
                })
                return result;
        }
}

export async function setAnswer (question='', language='', skill='', answer='') {
        await fetch('http://localhost:3000/answers', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        question: question,
                        language: language,
                        skill: skill,
                        answer: answer,
                })

        })
}




