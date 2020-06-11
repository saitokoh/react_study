import React, {useState, useEffect} from 'react';
import './App.css';
import Sample from './sample/Sample'
import TemplateSyntaxA from './tutolial/template_syntax/A'
import TemplateSyntaxB from './tutolial/template_syntax/B'
import TemplateSyntaxC from './tutolial/template_syntax/C'
import TemplateSyntaxD from './tutolial/template_syntax/D'
import TemplateSyntaxAnsA from './tutolial/template_syntax/answer/A'
import TemplateSyntaxAnsB from './tutolial/template_syntax/answer/B'
import TemplateSyntaxAnsC from './tutolial/template_syntax/answer/C'
import TemplateSyntaxAnsD from './tutolial/template_syntax/answer/D'
import FunctionEventA from './tutolial/function_event/A'
import FunctionEventB from './tutolial/function_event/B'
import FunctionEventC from './tutolial/function_event/C'
import FunctionEventD from './tutolial/function_event/D'
import FunctionEventAnsA from './tutolial/function_event/answer/A'
import FunctionEventAnsB from './tutolial/function_event/answer/B'
import FunctionEventAnsC from './tutolial/function_event/answer/C'
import FunctionEventAnsD from './tutolial/function_event/answer/D'

const routeMap = {
  sample: [
    {component: <Sample/>, label: 'サンプルコード', question: 'A', answer: null},
  ],
  template_syntax: [
    {component: <TemplateSyntaxA/>, label: 'テンプレート構文第1問', question: 'A', answer: <TemplateSyntaxAnsA/>},
    {component: <TemplateSyntaxB/>, label: 'テンプレート構文第2問', question: 'B', answer: <TemplateSyntaxAnsB/>},
    {component: <TemplateSyntaxC/>, label: 'テンプレート構文第3問', question: 'C', answer: <TemplateSyntaxAnsC/>},
    {component: <TemplateSyntaxD/>, label: 'テンプレート構文第4問', question: 'D', answer: <TemplateSyntaxAnsD/>},
  ],
  function_event: [
    {component: <FunctionEventA/>, label: '関数・イベント第1問', question: 'A', answer: <FunctionEventAnsA/>},
    {component: <FunctionEventB/>, label: '関数・イベント第2問', question: 'B', answer: <FunctionEventAnsB/>},
    {component: <FunctionEventC/>, label: '関数・イベント第3問', question: 'C', answer: <FunctionEventAnsC/>},
    {component: <FunctionEventD/>, label: '関数・イベント第4問', question: 'D', answer: <FunctionEventAnsD/>},
  ]
}

function App() {
  const [current, setCurrent] = useState(routeMap.sample[0].component);
  const [heading, setHeading] = useState('');

  const handleCurrent = (e, path, isAnswer, route) => {
    e.preventDefault()
    if (isAnswer) {
      window.history.pushState(null, '', `/${path}/answer/${route.question}`)
      setCurrent(route.answer)
      setHeading(`${route.label} 答え`)
    } else {
      window.history.pushState(null, '', `/${path}/${route.question}`)
      setCurrent(route.component)
      setHeading(route.label)
    }
  }
  useEffect(() => {
    (async () => {
      const pathList = window.location.pathname.split('/')
      if (pathList.length >= 3) {
        let currentRoute = null
        if (pathList[2] === 'answer') {
          currentRoute = routeMap[pathList[1]].filter(route => route.question === pathList[3])[0]
          setCurrent(currentRoute.answer)
          setHeading(`${currentRoute.label} 答え`)
        } else {
          currentRoute = routeMap[pathList[1]].filter(route => route.question === pathList[2])[0]
          setCurrent(currentRoute.component)
          setHeading(currentRoute.label)
        }
      }
    })();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(routeMap).map(path => (
          <ul key={path}>
            {routeMap[path].map(route => (
              <li key={route.label}>
                <a href="a" onClick={e => handleCurrent(e, path, false, route)}>{route.label}</a>
                {route.answer !== null &&
                  <a href='a' onClick={e => handleCurrent(e, path, true, route)}>（答え）</a>
                }
              </li>
            ))}
          </ul>
        ))}
      </header>
      <h1>{heading}</h1>
      <div className="main">
        {current}
      </div>
    </div>
  );
}

export default App;
