export default function Home() {
  return (
    <main className="wrap">
      <section className="card" aria-labelledby="titre-maintenance">
        <h1 id="titre-maintenance">Site internet du YUKEIKAN en maintenance&nbsp;!</h1>

        <p> Au <strong>YUKEIKAN à Bourg-en-Bresse</strong> nous pratiquons <strong>l'escrime japonaise</strong>, plus
          précisément : le <strong>kendo</strong>, le <strong>iaido</strong> et le <strong>jodo</strong>.
        </p>

        <p>Notre <strong>site internet est innaccessible pour le moment...</strong> mais vous pouvez nous joindre
          par e-mail pour plus d'informations concernant notre dojo ou les disciplines pratiquées
          : <strong>masamiyukeikan01@gmail.com</strong>
        </p>

        <p>Si vous n'avez jamais fait de kendo, jodo ou iaido, vous pouvez venir en <strong>tenue de sport
          confortable</strong> pour un permier cours de découverte. Nous proposons <strong>3 cours d’essai
          gratuits</strong> pour tester les trois disciplines, qui ont toutes pour point commun l'escrime
          japonaise, mais chacune a ses particularités.

        </p>

        <p>Dans tous les cas, n'hésitez pas à <strong>venir nous rencontrer lors des créneaux de cours</strong>.
        </p>

        <p>
          Nos entraînements ont lieu au <strong>Gymnase Croix Blanche</strong>
          (<em>Salle de Danse&nbsp;— 1<sup>er</sup> étage</em>).
        </p>

        <h2>Horaires</h2>

        <div className="schedule" role="list">
          <div className="slot" role="listitem">
            <h3>Iaido</h3>
            <p className="times">Vendredi&nbsp;: 18&nbsp;h à 20&nbsp;h</p>
          </div>

          <div className="slot" role="listitem">
            <h3>Kendo</h3>
            <p className="times">Mercredi&nbsp;: 19&nbsp;h&nbsp;30 à 21&nbsp;h&nbsp;30</p>
            <p className="times">Vendredi&nbsp;: 20&nbsp;h à 22&nbsp;h</p>
          </div>

          <div className="slot" role="listitem">
            <h3>Jodo</h3>
            <p className="times">Mercredi&nbsp;: 18&nbsp;h à 19&nbsp;h&nbsp;30</p>
          </div>
        </div>

      </section>
    </main>
  );
}
