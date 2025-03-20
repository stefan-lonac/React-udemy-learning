import { CORE_CONCEPTS } from '../../data'
import CoreConcept from './CoreConcept'

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concept</h2>

      <ul>
        {CORE_CONCEPTS.map((conceptItems) => (
          <CoreConcept key={conceptItems.title} {...conceptItems} />
        ))}
      </ul>
    </section>
  )
}
