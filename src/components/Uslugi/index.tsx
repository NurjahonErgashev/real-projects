import { ContainerComponent } from "..";
import { UslugiCard } from "./Card";
import uslugiCardImg1 from "../../images/uslugiCard_1.png";
import uslugiCardImg2 from "../../images/uslugiCard_2.png";
import uslugiCardImg3 from "../../images/uslugiCard_3.png";
import './index.scss'
export function Uslugi() {
  return (
    <div className="uslugi">
      <div className="uslugi__text">
        <h1>УСЛУГИ</h1>
      </div>
      <div className="uslugi__cards">
        <ContainerComponent>
          <UslugiCard
            img={uslugiCardImg1}
            title="СЕРВИС ОБОРУДОВАНИЯ"
            description="Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
          />
          <UslugiCard
            img={uslugiCardImg2}
            title="УСЛУГИ ЛОГИСТИКИ"
            description="Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей....."
          />
          <UslugiCard
            img={uslugiCardImg3}
            title="УСЛУГИ ЛОГИСТИКИ"
            description="Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей....."
          />
        </ContainerComponent>
      </div>
    </div>
  );
}
