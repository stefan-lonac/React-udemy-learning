import { useState } from 'react'
import { EXAMPLES } from '../../data'
import TabButton from '../tab-button/TabButton'
import Section from '../section/Section'
import Tabs from '../tab-button/Tabs'
import './examples.scss'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log('Hello - ', selectedButton)
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttonsTab={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleClick('components')}
              label="Components"
            />
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleClick('jsx')}
              label="JSX"
            />
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleClick('props')}
              label="Props"
            />
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleClick('state')}
              label="State"
            />
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  )
}
