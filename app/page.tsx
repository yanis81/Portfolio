import { MacbookScrollgo } from "./components/MacbookScrollgo";
import { H2carousel } from "./components/H2carousel"
import { Ipad } from "./components/ipad";
import { LampDemo } from "./components/ui/lamp";
import { ProjetComp } from "./components/projet";
import { BasDePage } from "./components/basDePage";
import {TimelineParcour} from "./components/TimelineParcours"

export default function Home() {
  return (
    <div itemScope itemType="http://schema.org/Person">
      <header>
        <MacbookScrollgo />
      </header>
      <main>
        <article>
          <LampDemo />
          <TimelineParcour/>
          <H2carousel />
          <Ipad />
          <ProjetComp />
        </article>
      </main>
      <footer>
        <BasDePage/>
      </footer>
    </div>
  );
}
