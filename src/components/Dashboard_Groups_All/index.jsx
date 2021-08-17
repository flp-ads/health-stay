import {
  Header,
  CardsList,
  All,
} from "../Dashboard_Groups/groups_home.style";
import GroupCard from "../Group_Card";

const DashboardGroupsAll = ({ MAX_CARDS, handleNavigation }) => {
  return (
      <div>
        <Header>
          Todos os <span>Grupos</span>
        </Header>
        <CardsList>
          {groups.slice(0, MAX_CARDS).map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </CardsList>
        {groups.length > MAX_CARDS && (
          <All onClick={() => handleNavigation("grupos")}>
            Ver <span>todos</span>
          </All>
        )}
      </div>
  );
};

export default DashboardGroupsAll;

const groups = [
  {
    id: 26,
    name: "Programming booster",
    description: "Grupo de Estudos de programação",
    category: "ahahha",
    creator: {
      id: 1,
      username: "fafa",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 569,
        username: "leleLE123",
        email: "leleLE123@gmail.com",
      },
      {
        id: 658,
        username: "paulo",
        email: "rapha@mail.com",
      },
      {
        id: 670,
        username: "squad5",
        email: "squad5@kenzie.com",
      },
      {
        id: 673,
        username: "Teste4000",
        email: "Teste4000@gmail.com",
      },
      {
        id: 649,
        username: "novousername",
        email: "gabriel@gmail.com",
      },
      {
        id: 672,
        username: "navarro",
        email: "a@a.com",
      },
      {
        id: 679,
        username: "adm",
        email: "egr@gmail.com",
      },
      {
        id: 681,
        username: "marcos",
        email: "marcos@gmail.com",
      },
      {
        id: 709,
        username: "teste01",
        email: "teste@mail.com",
      },
      {
        id: 713,
        username: "Daniel",
        email: "danielcosta@gmail.com",
      },
      {
        id: 776,
        username: "rafael",
        email: "mail@hotmail.com",
      },
      {
        id: 812,
        username: "Guilherme",
        email: "guilemesteste@email.com",
      },
      {
        id: 914,
        username: "testeteste",
        email: "testeteste@gmail.com",
      },
      {
        id: 978,
        username: "kenken",
        email: "kenzo@gmail.com",
      },
      {
        id: 992,
        username: "qualquer",
        email: "gabriel@gmail.com",
      },
      {
        id: 1044,
        username: "testeDaniel",
        email: "daniel@gmail.com",
      },
      {
        id: 1098,
        username: "xxxx",
        email: "x@gmail.com",
      },
      {
        id: 1102,
        username: "adryellCabral",
        email: "adryellluciano@gmail.com",
      },
      {
        id: 1205,
        username: "testenovo123",
        email: "rapha@mail.com",
      },
      {
        id: 662,
        username: "Gustavoooo",
        email: "gustavovieirazacchi@gmail.com",
      },
      {
        id: 1228,
        username: "tiago",
        email: "tiago@gmail.com",
      },
      {
        id: 1453,
        username: "drkspl",
        email: "davispindola27@gmail.com",
      },
      {
        id: 1572,
        username: "test1",
        email: "test@mail.com",
      },
      {
        id: 1608,
        username: "teste69",
        email: "teste69@gmail.com",
      },
      {
        id: 1613,
        username: "Jonatan",
        email: "Jonatan@gmail.com",
      },
      {
        id: 1617,
        username: "lilo",
        email: "lilo@gmail.com",
      },
      {
        id: 1615,
        username: "Waldiney",
        email: "walferreira@gmail.com",
      },
      {
        id: 1621,
        username: "RodrigoDM",
        email: "rodrigo.dmnr@gmail.com",
      },
      {
        id: 1623,
        username: "luizfederico",
        email: "luiz@gmail.com",
      },
      {
        id: 1624,
        username: "cleiton",
        email: "cleiton@gmail.com",
      },
      {
        id: 1625,
        username: "andré",
        email: "emaildoandre@gmail.com",
      },
      {
        id: 1628,
        username: "gabriel123",
        email: "gabriel123@gmail.com",
      },
      {
        id: 1633,
        username: "testinhos",
        email: "testinhos@gmail.com",
      },
      {
        id: 1637,
        username: "rodrigo1",
        email: "rodrigol@gmail.com",
      },
      {
        id: 1640,
        username: "Guilheme",
        email: "GuilhermeJob@gmail.com",
      },
      {
        id: 1664,
        username: "bibi",
        email: "gabrielaro@gmail.com",
      },
      {
        id: 1618,
        username: "rafaelrmaier",
        email: "rafael.rmaier@gmail.com",
      },
      {
        id: 1702,
        username: "teste2006",
        email: "teste2006@mail.com",
      },
      {
        id: 1709,
        username: "gabriel12345678",
        email: "gabriel12345678@gmail.com",
      },
      {
        id: 1707,
        username: "vicentepessoa",
        email: "vicente123@gmail.com",
      },
      {
        id: 1718,
        username: "miguers",
        email: "miguers@gmail.com",
      },
      {
        id: 1863,
        username: "lucasNovo",
        email: "lucasNovo@gmail.com",
      },
      {
        id: 1605,
        username: "ken5",
        email: "ken5@gmail.com",
      },
    ],
    goals: [
      {
        id: 1918,
        title: "novo",
        difficulty: "Medium",
        achieved: true,
        how_much_achieved: 100,
        group: 26,
      },
      {
        id: 2107,
        title: "React",
        difficulty: "Dificulty test 5",
        achieved: true,
        how_much_achieved: 100,
        group: 26,
      },
      {
        id: 1633,
        title: "asdasd",
        difficulty: "safdsdaf",
        achieved: true,
        how_much_achieved: 80,
        group: 26,
      },
      {
        id: 1674,
        title:
          "Nenhuma falta na academia cometida pelos membros do grupo na semana",
        difficulty: "Díficil",
        achieved: true,
        how_much_achieved: 100,
        group: 26,
      },
      {
        id: 1675,
        title:
          "Nenhuma falta na academia cometida pelos membros do grupo na semana",
        difficulty: "Díficil",
        achieved: true,
        how_much_achieved: 100,
        group: 26,
      },
      {
        id: 2004,
        title: "Eu amo Java",
        difficulty: "Média",
        achieved: false,
        how_much_achieved: 7,
        group: 26,
      },
      {
        id: 2014,
        title: "normaluser",
        difficulty: "Fácil",
        achieved: false,
        how_much_achieved: 76,
        group: 26,
      },
      {
        id: 1995,
        title: "Estudar Python",
        difficulty: "facil",
        achieved: false,
        how_much_achieved: 90,
        group: 26,
      },
      {
        id: 2320,
        title: "Criado através do app",
        difficulty: "Muito dificil",
        achieved: false,
        how_much_achieved: 0,
        group: 26,
      },
      {
        id: 2321,
        title: "Criado através do app2",
        difficulty: "faeefa",
        achieved: false,
        how_much_achieved: 0,
        group: 26,
      },
      {
        id: 2322,
        title: "Criado através do app2",
        difficulty: "faeefa",
        achieved: false,
        how_much_achieved: 0,
        group: 26,
      },
      {
        id: 2323,
        title: "Criado através do app2",
        difficulty: "faeefa",
        achieved: false,
        how_much_achieved: 0,
        group: 26,
      },
      {
        id: 2324,
        title: "Criado através do app3",
        difficulty: "faeefa",
        achieved: false,
        how_much_achieved: 0,
        group: 26,
      },
    ],
    activities: [
      {
        id: 913,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T16:34:37.465000Z",
        group: 26,
      },
      {
        id: 1253,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:32:15.670000Z",
        group: 26,
      },
      {
        id: 915,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T16:45:17.696000Z",
        group: 26,
      },
      {
        id: 768,
        title: "Ler diariamente um artigo",
        realization_time: "2021-03-18T01:49:00.683000Z",
        group: 26,
      },
      {
        id: 769,
        title: "Ler diariamente um artigo",
        realization_time: "2021-03-18T01:49:07.775000Z",
        group: 26,
      },
      {
        id: 770,
        title: "Concluir um projeto em grupo",
        realization_time: "2021-03-18T01:49:17.158000Z",
        group: 26,
      },
      {
        id: 771,
        title: "Ler diariamente um artigo",
        realization_time: "2021-03-18T01:50:41.651000Z",
        group: 26,
      },
      {
        id: 772,
        title: "Ler diariamente um artigo",
        realization_time: "2021-03-18T01:50:49.940000Z",
        group: 26,
      },
      {
        id: 773,
        title: "Concluir um projeto em grupo",
        realization_time: "2021-03-18T01:51:31.518000Z",
        group: 26,
      },
      {
        id: 777,
        title: "Crossfit Atualizado",
        realization_time: "2021-03-18T03:23:46.320000Z",
        group: 26,
      },
      {
        id: 778,
        title: "Ler diariamente um artigo",
        realization_time: "2021-03-18T03:24:11.244000Z",
        group: 26,
      },
      {
        id: 779,
        title: "Ler diariamente um artigo",
        realization_time: "2021-03-18T03:24:45.738000Z",
        group: 26,
      },
      {
        id: 1001,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T21:07:56.769000Z",
        group: 26,
      },
      {
        id: 875,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T15:13:36.270000Z",
        group: 26,
      },
      {
        id: 1877,
        title: "normaluser",
        realization_time: "2021-06-17T18:59:51.210000Z",
        group: 26,
      },
      {
        id: 809,
        title: "Meta",
        realization_time: "2021-03-18T12:45:05.593000Z",
        group: 26,
      },
      {
        id: 811,
        title: "Meta",
        realization_time: "2021-03-18T12:57:29.530000Z",
        group: 26,
      },
      {
        id: 2179,
        title: "normaluser",
        realization_time: "2021-08-09T23:55:01.451000Z",
        group: 26,
      },
      {
        id: 816,
        title: "Meta",
        realization_time: "2021-03-18T12:59:13.365000Z",
        group: 26,
      },
      {
        id: 817,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T13:04:43.508000Z",
        group: 26,
      },
      {
        id: 818,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T13:11:31.348000Z",
        group: 26,
      },
      {
        id: 878,
        title: "Meta",
        realization_time: "2021-03-18T15:30:29.831000Z",
        group: 26,
      },
      {
        id: 821,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T13:13:55.193000Z",
        group: 26,
      },
      {
        id: 824,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T13:19:23.835000Z",
        group: 26,
      },
      {
        id: 904,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T15:58:50.279000Z",
        group: 26,
      },
      {
        id: 916,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T16:45:26.718000Z",
        group: 26,
      },
      {
        id: 920,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T17:11:14.884000Z",
        group: 26,
      },
      {
        id: 1250,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:30:00.578000Z",
        group: 26,
      },
      {
        id: 1254,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:32:26.896000Z",
        group: 26,
      },
      {
        id: 1257,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:32:44.088000Z",
        group: 26,
      },
      {
        id: 1262,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:36:24.872000Z",
        group: 26,
      },
      {
        id: 1263,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:40:00.129000Z",
        group: 26,
      },
      {
        id: 1267,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:53:30.583000Z",
        group: 26,
      },
      {
        id: 1269,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T11:09:36.836000Z",
        group: 26,
      },
      {
        id: 1274,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T12:05:19.347000Z",
        group: 26,
      },
      {
        id: 1290,
        title: "Meta",
        realization_time: "2021-03-19T12:33:41.411000Z",
        group: 26,
      },
      {
        id: 1411,
        title: "Crossfit",
        realization_time: "2021-03-10T15:00:00Z",
        group: 26,
      },
      {
        id: 1270,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T11:14:06.852000Z",
        group: 26,
      },
      {
        id: 1098,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T23:29:56.029000Z",
        group: 26,
      },
      {
        id: 1099,
        title: "Meta",
        realization_time: "2021-03-18T23:30:54.351000Z",
        group: 26,
      },
      {
        id: 1100,
        title: "Meta",
        realization_time: "2021-03-18T23:31:14.582000Z",
        group: 26,
      },
      {
        id: 1247,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:26:59.226000Z",
        group: 26,
      },
      {
        id: 1251,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:31:44.309000Z",
        group: 26,
      },
      {
        id: 1255,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:32:31.213000Z",
        group: 26,
      },
      {
        id: 1107,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T23:35:33.270000Z",
        group: 26,
      },
      {
        id: 1108,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T23:35:44.358000Z",
        group: 26,
      },
      {
        id: 1109,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T23:35:54.343000Z",
        group: 26,
      },
      {
        id: 1258,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:32:45.744000Z",
        group: 26,
      },
      {
        id: 1111,
        title: "Leitura de um artigo",
        realization_time: "2021-03-18T23:36:06.199000Z",
        group: 26,
      },
      {
        id: 1266,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T10:52:50.782000Z",
        group: 26,
      },
      {
        id: 1149,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T01:32:50.786000Z",
        group: 26,
      },
      {
        id: 1285,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T12:26:14.110000Z",
        group: 26,
      },
      {
        id: 1134,
        title: "Meta",
        realization_time: "2021-03-19T00:33:27.847000Z",
        group: 26,
      },
      {
        id: 1135,
        title: "Meta",
        realization_time: "2021-03-19T00:33:39.872000Z",
        group: 26,
      },
      {
        id: 1289,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T12:33:25.247000Z",
        group: 26,
      },
      {
        id: 1159,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T02:22:18.451000Z",
        group: 26,
      },
      {
        id: 1160,
        title: "Meta",
        realization_time: "2021-03-19T02:22:27.704000Z",
        group: 26,
      },
      {
        id: 1173,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T03:09:26.423000Z",
        group: 26,
      },
      {
        id: 1174,
        title: "Leitura de um artigo",
        realization_time: "2021-03-19T03:09:39.318000Z",
        group: 26,
      },
      {
        id: 2176,
        title: "Crossfit",
        realization_time: "2021-09-10T15:00:00Z",
        group: 26,
      },
      {
        id: 2170,
        title: "dsad",
        realization_time: "2021-07-19T22:41:03.284000Z",
        group: 26,
      },
      {
        id: 1787,
        title: "testando123",
        realization_time: "2021-06-17T12:28:44.679000Z",
        group: 26,
      },
      {
        id: 2214,
        title: "Crossfit",
        realization_time: "2021-03-10T15:00:00Z",
        group: 26,
      },
      {
        id: 2059,
        title: "Java",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
      {
        id: 2060,
        title: "fsdf",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
      {
        id: 2061,
        title: "Leitura diária",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
      {
        id: 2063,
        title: "Java",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
      {
        id: 2064,
        title: "Leitura diária",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
      {
        id: 2065,
        title: "JavaScript",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
      {
        id: 2066,
        title: "ReactJs",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
      {
        id: 2067,
        title: "sdf",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
      {
        id: 2068,
        title: "sfe",
        realization_time: "2021-05-24T10:30:00Z",
        group: 26,
      },
    ],
  },
  {
    id: 27,
    name: "Programação",
    description: "Grupo atualizado 18:40",
    category: "prático",
    creator: {
      id: 1,
      username: "fafa",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 649,
        username: "novousername",
        email: "gabriel@gmail.com",
      },
      {
        id: 672,
        username: "navarro",
        email: "a@a.com",
      },
      {
        id: 1863,
        username: "lucasNovo",
        email: "lucasNovo@gmail.com",
      },
    ],
    goals: [
      {
        id: 1383,
        title: "Fazer 2 katas - JS",
        difficulty: "medium",
        achieved: false,
        how_much_achieved: 0,
        group: 27,
      },
    ],
    activities: [
      {
        id: 1261,
        title: "Praticar CodeWars em JS",
        realization_time: "2021-03-19T10:34:54.062000Z",
        group: 27,
      },
    ],
  },
  {
    id: 28,
    name: "Testers",
    description: "Bora testar tudo",
    category: "TI",
    creator: {
      id: 1,
      username: "fafa",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 709,
        username: "teste01",
        email: "teste@mail.com",
      },
      {
        id: 719,
        username: "Gabriel",
        email: "gabrielvieirazacchi@gmail.com",
      },
      {
        id: 1863,
        username: "lucasNovo",
        email: "lucasNovo@gmail.com",
      },
    ],
    goals: [],
    activities: [],
  },
  {
    id: 29,
    name: "Testers",
    description: "Bora Testar",
    category: "TI",
    creator: {
      id: 1,
      username: "fafa",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 681,
        username: "marcos",
        email: "marcos@gmail.com",
      },
      {
        id: 709,
        username: "teste01",
        email: "teste@mail.com",
      },
      {
        id: 712,
        username: "doisberto",
        email: "doisberto@gmail.com",
      },
      {
        id: 1863,
        username: "lucasNovo",
        email: "lucasNovo@gmail.com",
      },
    ],
    goals: [
      {
        id: 746,
        title: "React",
        difficulty: "Difícil",
        achieved: true,
        how_much_achieved: 0,
        group: 29,
      },
      {
        id: 758,
        title: "Teste",
        difficulty: "Normal",
        achieved: true,
        how_much_achieved: 0,
        group: 29,
      },
    ],
    activities: [
      {
        id: 671,
        title: "Teste",
        realization_time: "2021-05-11T11:30:00Z",
        group: 29,
      },
      {
        id: 672,
        title: "Teste",
        realization_time: "2021-05-11T11:30:00Z",
        group: 29,
      },
      {
        id: 505,
        title: "1:30",
        realization_time: "2021-05-11T01:30:00Z",
        group: 29,
      },
      {
        id: 506,
        title: "00:15",
        realization_time: "2021-05-11T00:15:00Z",
        group: 29,
      },
      {
        id: 1604,
        title: "121212",
        realization_time: "2021-06-15T19:51:21.074000Z",
        group: 29,
      },
      {
        id: 1610,
        title: "teste",
        realization_time: "2021-06-15T20:51:04.856000Z",
        group: 29,
      },
      {
        id: 1614,
        title: "ola ola",
        realization_time: "2021-06-17T09:51:00Z",
        group: 29,
      },
    ],
  },
  {
    id: 30,
    name: "Grupo Led Zeppelin rules",
    description: "Reunião dos fãs da banda Led Zeppelin.",
    category: "musica",
    creator: {
      id: 1,
      username: "fafa",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 978,
        username: "kenken",
        email: "kenzo@gmail.com",
      },
      {
        id: 1268,
        username: "joao",
        email: "joao@mail.com",
      },
      {
        id: 1275,
        username: "mateus",
        email: "matt@bol.com",
      },
      {
        id: 1621,
        username: "RodrigoDM",
        email: "rodrigo.dmnr@gmail.com",
      },
      {
        id: 1863,
        username: "lucasNovo",
        email: "lucasNovo@gmail.com",
      },
    ],
    goals: [
      {
        id: 968,
        title: "Tocar Stairway to Heaven",
        difficulty: "Díficil",
        achieved: false,
        how_much_achieved: 25,
        group: 30,
      },
    ],
    activities: [],
  },
  {
    id: 31,
    name: "Grupo do futsal de terra",
    description: "Teste 16:38",
    category: "Tester",
    creator: {
      id: 1,
      username: "fafa",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 972,
        username: "eeee",
        email: "mail@mail.com",
      },
      {
        id: 1863,
        username: "lucasNovo",
        email: "lucasNovo@gmail.com",
      },
    ],
    goals: [],
    activities: [],
  },
  {
    id: 32,
    name: "lucas",
    description: "Teste 16:45",
    category: "Leitura",
    creator: {
      id: 1,
      username: "fafa",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 654,
        username: "teste41",
        email: "teste41@email.com",
      },
      {
        id: 709,
        username: "teste01",
        email: "teste@mail.com",
      },
      {
        id: 1027,
        username: "testando0",
        email: "abc@mail.com",
      },
      {
        id: 1863,
        username: "lucasNovo",
        email: "lucasNovo@gmail.com",
      },
    ],
    goals: [
      {
        id: 636,
        title: "gsdfdf",
        difficulty: "easy",
        achieved: false,
        how_much_achieved: 0,
        group: 32,
      },
    ],
    activities: [],
  },
  {
    id: 33,
    name: "Grupo de Escalada",
    description: "123123123",
    category: "Aventura",
    creator: {
      id: 1,
      username: "fafa",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 709,
        username: "teste01",
        email: "teste@mail.com",
      },
      {
        id: 1224,
        username: "TesteDoQA01",
        email: "TesteDoQA01@email.com",
      },
      {
        id: 1629,
        username: "nascimento",
        email: "nascimento@gmail.com",
      },
      {
        id: 1858,
        username: "testere",
        email: "testere@mail.com",
      },
      {
        id: 1863,
        username: "lucasNovo",
        email: "lucasNovo@gmail.com",
      },
    ],
    goals: [
      {
        id: 1903,
        title: "a",
        difficulty: "Médio",
        achieved: false,
        how_much_achieved: 85,
        group: 33,
      },
    ],
    activities: [
      {
        id: 1860,
        title: "a",
        realization_time: "2021-06-17T18:21:33.508000Z",
        group: 33,
      },
      {
        id: 1861,
        title: "a",
        realization_time: "2021-06-17T18:21:39.249000Z",
        group: 33,
      },
      {
        id: 1862,
        title: "s",
        realization_time: "2021-06-17T18:21:45.267000Z",
        group: 33,
      },
      {
        id: 1784,
        title: "a",
        realization_time: "2021-06-17T12:23:50.778000Z",
        group: 33,
      },
    ],
  },
];
