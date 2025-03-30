import { Test } from "../../Components/Test";
import "./Home.css";
import { useState } from "react";

function Home() {
  const [b, setB] = useState(true)
  return (
    <>
      {/* <div className="home-container">
        <div className="main">
          <h1>Home</h1>
          <p className="main-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            consequuntur ea reprehenderit voluptate aut tenetur voluptas,
            pariatur, odit blanditiis fuga incidunt, soluta tempora
            necessitatibus distinctio voluptatem. Doloremque esse est maiores
            nulla! Necessitatibus tempore accusantium commodi, labore eligendi
            recusandae. Labore aliquam ea nulla possimus repudiandae quae, eos
            ad pariatur quisquam laboriosam, nostrum necessitatibus expedita
            saepe accusantium eius suscipit cumque provident quidem beatae! Vel
            non saepe animi, minus sapiente ad ullam soluta molestiae, modi illo
            iste laboriosam veniam pariatur labore obcaecati nostrum dicta
            accusamus sequi itaque dolorum et necessitatibus laudantium
            cupiditate adipisci? Eius excepturi mollitia iste vero maiores quo
            adipisci recusandae dolores aspernatur quaerat obcaecati enim
            repellendus quidem dolore dolorem iure, sunt modi quibusdam deserunt
            voluptates necessitatibus voluptatem? Perspiciatis, saepe quisquam
            deserunt placeat, quidem quaerat optio id fugit fuga aliquid sit
            dolorum voluptatem consequatur voluptate corporis accusamus quis
            minima porro repellendus aspernatur beatae? Officia ipsa tempore
            enim praesentium quos dolores facere, maxime corrupti aliquam, alias
            quisquam distinctio fugiat labore obcaecati. Facere optio neque
            molestias laborum iusto. Harum repellendus iure facilis, inventore
            possimus blanditiis illo ex optio at ut illum tenetur mollitia,
            nesciunt suscipit aperiam dolorum soluta hic quam culpa. Dicta
            quibusdam quo architecto iure blanditiis iste corrupti asperiores,
            nisi laborum cumque aspernatur quas harum vitae dignissimos in
            fugiat error quos obcaecati impedit dolor incidunt reiciendis?
            Ratione illum voluptate facere, consequuntur enim obcaecati, minus
            maiores facilis ipsam iusto quos mollitia consequatur doloremque,
            fuga amet quam iure? Eligendi sed, aperiam sequi hic explicabo
            saepe, sapiente beatae quasi illo nulla, molestias commodi. Omnis,
            vitae pariatur dolorum sunt et nemo sequi esse iste modi ducimus!
            Labore veniam pariatur molestias, voluptate iure aperiam impedit
            ipsum cupiditate ab delectus? Modi ipsa eius ipsum non dolore
            aliquam velit blanditiis, cupiditate architecto omnis, distinctio
            necessitatibus itaque? Dicta totam nesciunt deserunt sit dolor optio
            molestiae soluta, ipsa possimus reprehenderit id alias error atque
            animi fuga vero. Provident beatae quo minus repudiandae laborum vero
            asperiores rem sed, ea assumenda. Soluta, quibusdam officiis fugit
            magnam dolores molestiae veniam vero recusandae dignissimos earum
            temporibus cum. Minima quis est tenetur officiis deleniti nisi quod
            animi eum explicabo. Eligendi architecto mollitia accusantium quas
            labore nobis obcaecati iste autem, quibusdam officia praesentium
            enim dolorum nihil natus animi molestiae quam ratione! Ex assumenda
            nobis vel repudiandae! Vitae eius reprehenderit repellat repellendus
            perspiciatis, velit provident expedita tempora, voluptas quas hic,
            cumque aut veniam at tenetur. Itaque consequatur quae rerum
            aspernatur! Aspernatur, dolor praesentium quod delectus aliquam
            autem. Nulla voluptates doloremque a corrupti ratione, dolorum autem
            reprehenderit architecto cumque perferendis est amet debitis
            voluptatem minus non quis perspiciatis culpa ab facere deserunt
            laboriosam dignissimos optio numquam. Officia sequi dolorem hic
            reprehenderit minima modi. Quas reiciendis blanditiis accusamus
            cupiditate, dicta numquam maxime, sed sit libero qui voluptates rem
            quod, aliquam quaerat quasi a nemo! Recusandae veniam commodi maxime
            vero obcaecati beatae nisi ut quia quae ullam saepe deleniti illum
            officiis laborum, architecto eius quos quam voluptatibus hic
            quisquam. Delectus modi maxime, omnis facere eveniet, quisquam
            cupiditate error quae perferendis earum reiciendis impedit sed ex
            minima laudantium temporibus quia! Voluptatum delectus minima nemo
            magnam dolor. Incidunt recusandae quaerat facilis earum sit! Ducimus
            aliquid animi vero dolor hic, consequuntur, maxime molestiae natus,
            id quidem soluta rem. Reiciendis repellendus maxime porro soluta
            deserunt fugit iusto libero accusamus similique cum fugiat iste,
            aliquam et consequatur sapiente eius asperiores facere repellat
            molestias ducimus rerum quae! Necessitatibus delectus quis dicta
            odit, explicabo earum quidem harum ab voluptatibus consequuntur quos
            molestiae! Animi commodi dolor iste eum, provident minus placeat
            ipsa voluptatum velit quis neque ex dicta exercitationem laboriosam,
            ea non porro possimus nobis? Dolore fuga nobis voluptates molestias
            quaerat facere enim atque pariatur adipisci officia harum culpa
            tenetur, debitis necessitatibus ullam aperiam explicabo voluptas
            illum? Cupiditate molestiae inventore quibusdam repellat cumque
            magnam rem natus quisquam fugiat ipsum magni recusandae nesciunt
            dicta, vel eaque odit vitae enim ipsam minus sunt! Reiciendis
            accusamus doloremque molestias quo illo excepturi asperiores
            architecto adipisci! Adipisci minus provident temporibus
            consequuntur, nostrum magni eius error dolore in perspiciatis
            ducimus odio harum explicabo vitae fugiat non voluptatem iste quod
            molestias aliquid laudantium architecto? Quo corrupti itaque ea quas
            tempora iusto architecto, exercitationem dolores tenetur aperiam
            dolorem impedit atque esse. Error, dolore tenetur voluptas corrupti
            enim molestias repellat quis mollitia porro facere aspernatur nobis
            eum quisquam nostrum esse ipsam qui dolorem ullam nisi voluptatem
            inventore cumque. Rem minus architecto similique aliquid velit
            dolorem optio quia officia, magni porro perspiciatis quae eius eos
            enim veniam quisquam itaque dolore est debitis saepe blanditiis!
            Facere eveniet minus quos. Quo nisi tempora sit itaque similique
            maiores molestias, est ratione officia hic nobis deserunt excepturi
            tempore illo repudiandae. Voluptatum commodi, veritatis porro esse
            similique dolore accusamus alias, odit tempora ad quis, excepturi
            minima perspiciatis aspernatur itaque eum odio quos eligendi
            incidunt qui possimus cupiditate illo voluptas. Alias tempora
            doloribus eos quo, accusamus debitis quia ab eum, adipisci omnis
            quod eaque iste asperiores veritatis commodi. Similique blanditiis,
            nihil officiis impedit nisi, minus voluptatibus repellendus
            reprehenderit dolorem distinctio nobis architecto unde sapiente ad
            odit numquam iusto fuga placeat alias illum eligendi. Aperiam rem
            autem similique deleniti harum beatae facilis. Mollitia, sunt.
            Dolore nesciunt placeat ipsa ratione non pariatur ipsam fugiat
            accusamus vel vero. Unde eveniet architecto obcaecati quia
            voluptatem sapiente voluptates adipisci, similique porro sequi et
            culpa quisquam praesentium consectetur nobis ut consequuntur illo
            quidem omnis. Sunt soluta odio quos amet alias magni tenetur
            officia, maxime deleniti excepturi aut accusamus quae reiciendis
            labore expedita, harum incidunt repellat, aliquam delectus quasi
            temporibus. Tempore, exercitationem quae. Nisi veritatis at eaque
            illo, recusandae ducimus perspiciatis, deleniti ex perferendis
            ratione sequi iste pariatur aliquam obcaecati aperiam laudantium
            neque eveniet veniam exercitationem delectus fugit odit eum!
            Provident nam, perferendis voluptatibus ea perspiciatis porro?
            Numquam error quaerat ratione, voluptatibus illo quos eius maiores,
            itaque quibusdam fugiat officiis perferendis. Doloribus, ipsum iste
            odio quae distinctio, molestiae quos expedita corrupti ex cumque
            architecto? Consectetur eius eaque repudiandae. Adipisci iste
            repellendus aut similique, deleniti aliquam! Similique cum sed
            praesentium adipisci iure? Adipisci, praesentium molestiae ipsam
            tenetur itaque laudantium tempora quo fugit odit libero accusamus
            iure nemo, ipsum earum culpa neque. Deserunt, temporibus vero!
          </p>
        </div>
      </div> */}
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-header">Добро пожаловать в мое портфолио</h1>
          <p className="home-text">
          Привет! Меня зовут Василий, и я начинающий веб-разработчик с горящими глазами и страстью к созданию цифровых решений.

Мой путь в IT начался с занятий с репетитором и постепенно перерос в серьезное увлечение. За последние 1.5 года я освоил ключевые технологии современной веб-разработки: React, JavaScript, HTML5/CSS3 и основы Node.js. Особенно горжусь своими проектами, где смог реализовать [перечислите 2-3 сложных момента, например: "динамическую загрузку данных", "адаптивную верстку", "работу с API"].

В работе ценю чистый читаемый код и стараюсь следовать принципам DRY и KISS. Уверенно использую Git для контроля версий и Figma для работы с макетами. Сейчас углубленно изучаю [укажите текущее направление, например: "оптимизацию производительности React-приложений"/"TypeScript"/"тестирование компонентов"].

Мои сильные стороны:

Упорство в решении сложных задач

Внимание к деталям интерфейсов

Стремление разобраться в глубинных механизмах работы технологий

В этом портфолио собраны проекты, которые демонстрируют мой прогресс — от простых лендингов до [укажите самый сложный проект]. Каждая работа сопровождается подробным описанием используемых технологий и решенных проблем.

Как начинающий разработчик, я открыт для интересных предложений и готов к нестандартным задачам, которые помогут мне расти профессионально. Верю, что сочетание технических навыков, обучаемости и творческого подхода делает меня ценным участником IT-команд.

Всегда рад новым знакомствам в профессиональном сообществе!
          </p>
          <button onClick={()=> setB(false)}>Kill</button>
         {b && <Test/>}
        </div>
      </div>
    </>
  );
}

export default Home;
