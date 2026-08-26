export default function Home() {
  return (
    <main className="wrap">
      <section className="card" aria-labelledby="titre-maintenance">
        <h1 id="titre-maintenance">Site internet du YUKEIKAN en maintenance&nbsp;!</h1>

        <p> Au <strong>YUKEIKAN à Bourg-en-Bresse</strong> nous pratiquons <strong>l'escrime japonaise</strong>, plus
          précisément : le <strong>kendo</strong>, le <strong>jodo</strong> et le <strong>iaido</strong>.
        </p>

        <p>Notre <strong>site internet est innaccessible pour le moment...</strong> mais vous pouvez nous joindre
          par e-mail pour plus d'informations concernant notre dojo ou les disciplines pratiquées
          : <strong>masamiyukeikan01@gmail.com</strong> ou par téléphone au <strong>zéro-six 46 88 05 23</strong>. Laissez un message vocal ou un sms si on ne décroche pas du premier coup.
        </p>

        <p>Si vous n'avez jamais fait de kendo, jodo ou iaido, vous pouvez venir en <strong>tenue de sport
          confortable</strong> pour un permier cours de découverte. Nous proposons <strong>3 cours d'essai
          gratuits</strong> pour essayer les trois disciplines, qui ont toutes pour point commun l'escrime
          japonaise, mais chacune a ses particularités.
        </p>

        <p>Dans tous les cas, vous pouvez <strong>venir nous rencontrer lors des créneaux de cours</strong>.
        </p>

        <p>
          Nos entraînements ont lieu au <strong>Gymnase Croix Blanche</strong>
          (<em>Salle de Danse — 1<sup>er</sup> étage</em>), Place Camille Claudel, accès via Rue des Dîmes.
        </p>

        <h2>Horaires pour la saison 2026-2027</h2>

        <div className="schedule" role="list">
            <div className="slot" role="listitem">
            <h3>Kendo</h3> <em>Reprise des cours mercredi 2/09/2026</em>
            <p className="times">Mercredi : 20h00 à 22h00 (tous niveaux)</p>
            <p className="times">Vendredi : 20h00 à 22h00 (tous niveaux)</p>
          </div>
          
             <div className="slot" role="listitem">
            <h3>Jodo</h3> <em>Reprise des cours mercredi 2/09/2026</em>
            <p className="times">Mercredi : 17h30 à 18h30 (Shinto Muso Ryu + Kenjutsu : pratiquants avancés uniquement) </p>
            <p className="times">Mercredi : 18h30 à 22h00 (tous niveaux) </p>
          </div>    
          
          <div className="slot" role="listitem">
            <h3>Iaido</h3> <em>Reprise des cours vendredi 11/09/2026</em>
            <p className="times">Vendredi : 18h30 à 20h00 (tous niveaux) </p>
          </div>
  </div>
        <h2>Enseignants</h2>

        <div className="schedule" role="list">
            <div className="slot" role="listitem">
            <h3>Kendo</h3>
            <p className="times">Nahim CHAZOTTES : 4<sup>ème</sup> dan - diplômé CFEB</p>
            <p className="times">Charles BROZILLE : 3<sup>ème</sup>  dan - diplômé CFEB</p>
            <p className="times">Guillaume FOURNIER : 2<sup>ème</sup>  dan - diplômé CAF (nouveau CFEB)</p>
          </div>
          
            <div className="slot" role="listitem">
            <h3>Jodo</h3>
            <p className="times">Christian FORAY : Shodan FEJ - chef de groupe FEJ (Shinto Muso Ryu Jodo)</p>
            <p className="times">Flavien SCHWORER : Shodan FEJ - 1<sup>er</sup> dan ZNKR jodo - diplômé CAF (nouveau CFEB),</p> 
            </div>
               
          <div className="slot" role="listitem">
            <h3>Iaido</h3>
            <p className="times">Stephen BELLACHES : 4<sup>ème</sup>  dan - diplômé CFEB </p>
          </div>
               
         
        </div>

      </section>
    </main>
  );
}
