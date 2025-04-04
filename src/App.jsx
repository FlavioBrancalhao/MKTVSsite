
import './App.css'
import "@fontsource/azeret-mono";
import Down from './assets/down';
import Bolinha from './assets/Bolinha';
import Icon1 from './assets/Icon1';
import Icon2 from './assets/Icon2';
import Icon3 from './assets/icon3';
import Yes from './assets/Yes';
import No from './assets/No';

function App() {

  

  return (
    <>
    <div className="bg-[url('./assets/Group5.png')] bg-no-repeat bg-cover w-full h-[72vh] flex flex-col items-center text-white xl:bg-[url('./assets/Group1.png')] xl:h-[90vh] ">
      <p className='text-white p-1 absolute top-0 left-0 xl:text-[24px]'>FBDEVS</p>
      <div className="w-60 xl:w-[45%] xl:pr-[22%]">
      <p className='text-white text-[20px] text-center pt-8 xl:text-[3em] xl:pt-50 xl:text-left  '>Impulsionamos sua empresa com soluções estratégicas!</p>
      <p className='text-white text-[16px] text-center pt-2 xl:text-[1.5em]'>Ajudamos sua empresa a crescer com estratégias de marketing personalizadas, aumentando sua visibilidade, atraindo clientes e fortalecendo sua marca no mercado.</p>
      <div className="flex items-center flex-col p-4">
      <a href='https://w.app/aq2ges' className='border-2 border-white text-white py-[20px] px-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] xl:text-[1.5em]'  >Contato</a>
      <a href='#planos' className="p-6 xl:text-[1.5em]">Planos</a>
      </div>
      </div>
    </div>
    <div className="w-full flex flex-col items-center">
    <div className="xl:w-[30%]">
    <p className="flex flex-row pt-4 text-[20px] xl:text-[2em]  items-center"><Bolinha /><p className='pl-2'> MKTVS</p></p>
    </div>
    <p className='w-60 text-center p-4 text-[16px] xl:w-[28%] xl:text-[1.4em] xl:text-left xl:text-'>MKTVS é um projeto da FBDEVS, que consiste em exibir propagandas do seu estabelecimento em locais movimentados, aumentando a visibilidade e atraindo mais clientes.</p>
    
    <div className=" hidden xl:flex flex-col items-center xl:flex-row  ">
      
      <div className=" w-[100%] xl:flex flex-col items-center ">
      <Icon1 />
      <p className='p-2 text-[1.4em] text-center  '>Visibilidade</p>
      <p className='w-60 text-center text-[#290073] p-2 text-[1.4em] '>Mais pessoas conhecerão sua marca.</p>
      </div>

      <div className="xl:flex flex-col items-center">
      <Icon2 />
      
      <p className='p-2 text-[1.4em] text-center'>Lucro</p>
      <p className='w-60 text-center text-[#290073] p-2 text-[1.4em] '>Todo investimento bem planejado gera lucro</p>
      </div>

      <div className="  xl:flex flex-col items-center">
      <Icon3 />
      <p className='p-2 text-[1.4em] text-center'>Crescimento</p>
      <p className='w-60 text-center text-[#290073] p-2 text-[1.4em]'>Crescimento vital para a empresa.</p>
      </div>
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:hidden  ">
      
      <Icon1 />
      <p className='p-2 text-[20px] text-center '>Visibilidade</p>
      <p className='w-60 text-center text-[#290073] p-2 text-[16px]'>Mais pessoas conhecerão sua marca.</p>
    
      <Icon2 />
      <p className='p-2 text-[20px] text-center'>Lucro</p>
      <p className='w-60 text-center text-[#290073] p-2 text-[16px]'>Todo investimento bem planejado gera lucro</p>
    
      
      <Icon3 />
      <p className='p-2 text-[20px] text-center'>Crescimento</p>
      <p className='w-60 text-center text-[#290073] p-2 text-[16px]'>Crescimento vital para a empresa.</p>
  
    </div>

    
    
    <p className="flex flex-row pt-4 text-[20px] xl:text-[1.5em]  items-center"><Bolinha /><p className='pl-2'> Planos</p></p>

    <div className="w-[95%] pt-2 xl:w-[30%] xl:pt-5" id='planos'>
      <div className="flex justify-around items-center w-full border-2 bg-[#290073] border-[#290073] text-white py-[20px] px-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] xl:text-[1.5em] ">
       <div className="flex ">
        <p>Standard</p>
      </div>
      <div className="">
        <p>R$ 45,00</p>
        <p>por mês</p>
      </div>
    </div>
      <table className='w-[85%] m-auto font-normal xl:text-[1.5em] '>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>1 Propaganda em uma televisão em um estabelecimento movimentado(mktvs)</th>
          </tr>
          <tr className='pt-2'>
            <th><No/></th>
            <th className='font-normal text-left pl-4'>1 Design de propaganda por mês</th>
          </tr>
          <tr className='pt-2'>
            <th><No/></th>
            <th className='font-normal text-left pl-4'>3 Design de banners de midia social ( Instagram , whats app) por mês</th>
          </tr>
          <tr className='pt-2'>
            <th><No/></th>
            <th className='font-normal text-left pl-4'>1 site landing page (pagina unica) com 3 edições por ano</th>
          </tr>
          <tr className='pt-2'>
            <th><No/></th>
            <th className='font-normal text-left pl-4'>designs de cartoes de visita ou banners fisicos</th>
          </tr>
          <tr className='pt-2'>
            <th><No/></th>
            <th className='font-normal text-left pl-4'>1 consultoria para melhorias no marketing da empresa por mês</th>
          </tr>

      </table>
    </div>
    <div className="w-[95%] pt-2 xl:w-[30%] xl:pt-5">
      <div className="flex justify-around items-center w-full border-2 bg-[#290073] border-[#290073] text-white py-[20px] px-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] xl:text-[1.5em] ">
       <div className="flex ">
        <p>Plus</p>
      </div>
      <div className="">
        <p>R$ 85,00</p>
        <p>por mês</p>
      </div>
    </div>
      <table className='w-[85%] m-auto font-normal xl:text-[1.5em] '>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>1 Propaganda em uma televisão em um estabelecimento movimentado(mktvs)</th>
          </tr>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>1 Design de propaganda por mês</th>
          </tr>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>3 Design de banners de midia social ( Instagram , whats app) por mês</th>
          </tr>
          <tr className='pt-2'>
            <th><No/></th>
            <th className='font-normal text-left pl-4'>1 site landing page (pagina unica) com 3 edições por ano</th>
          </tr>
          <tr className='pt-2'>
            <th><No/></th>
            <th className='font-normal text-left pl-4'>designs de cartoes de visita ou banners fisicos</th>
          </tr>
          <tr className='pt-2'>
            <th><No/></th>
            <th className='font-normal text-left pl-4'>1 consultoria para melhorias no marketing da empresa por mês</th>
          </tr>

      </table>
    </div>
    <div className="w-[95%] pt-2 xl:w-[30%] xl:pt-5">
      <div className="flex justify-around items-center w-full border-2 bg-[#290073] border-[#290073] text-white py-[20px] px-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] xl:text-[1.5em] ">
       <div className="flex ">
        <p>Master</p>
      </div>
      <div className="">
        <p>R$ 130,00</p>
        <p>por mês</p>
      </div>
    </div>
      <table className='w-[85%] m-auto font-normal xl:text-[1.5em] '>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>1 Propaganda em uma televisão em um estabelecimento movimentado(mktvs)</th>
          </tr>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>1 Design de propaganda por mês</th>
          </tr>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>3 Design de banners de midia social ( Instagram , whats app) por mês</th>
          </tr>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>1 site landing page (pagina unica) com 3 edições por ano</th>
          </tr>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>designs de cartoes de visita ou banners fisicos</th>
          </tr>
          <tr className='pt-2'>
            <th><Yes/></th>
            <th className='font-normal text-left pl-4'>1 consultoria para melhorias no marketing da empresa por mês</th>
          </tr>

      </table>
    </div>

    <a className='border-2 border-[#290073] mt-4 text-[#290073] py-[20px] px-[80px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] xl:text-[1.5em] ' href='https://w.app/aq2ges' >Contato</a>

      <div className="flex flex-col justify-center items-center bg-[#290073] w-full h-auto mt-4 text-white xl:h-[30vh]">
        <div className=" w-[90%] text-center p-4 xl:w-[30%]">
        <p className='text-[20px] pb-2 xl:text-[1.5em]'>Por que ter um site?</p>
        <p className='text-[16px] xl:text-[1.4em]'>Um site é essencial para qualquer empresa, em todos os ramos, pois traz credibilidade e profissionalismo, além de permitir que seja encontrado facilmente no Google e alcance mais clientes, podendo até utilizar o famoso tráfego pago para potencializar os resultados.</p>
        </div>

      </div>

      <div className="w-[90%] p-4 xl:w-[30%]">
      <p className="flex flex-row  text-[20px] xl:text-[1.5em] pb-2 items-center justify-center"><Bolinha /><p className='pl-2'> Consultoria</p></p>
      <p className='text-center xl:text-[1.5em]'>Realizamos reuniões presenciais ou online para definir estratégias de marketing, como a definição do público-alvo.</p>
      <p className='text-center xl:text-[1.5em]' >As reuniões são agendadas previamente, no horário definido pelo contratante, conforme disponibilidade na agenda.</p>
      </div>

      <div className="flex flex-col justify-between items-center bg-[#290073] w-full  mt-4 text-white h-[30vh] xl:flex-row xl:justify-evenly">
        <div className="flex flex-col xl:text-[1.5em] xl:border-r-2 xl:border-white xl:w-[30%]">
        <p>Produtos</p>
        <p>MKTVS</p>
        <p>Web Design</p>
        <p>Criação de sites</p>
        </div>
        <div className="flex flex-col  xl:text-[1.5em] xl:border-r-2 xl:border-white xl:w-[30%]">
        <p>Produtos</p>
        <a href='https://w.app/aq2ges' >(11)98770-4919</a>
        <a href="mailto:fgbrancalhao@gmail.com">fgbrancalhao@gmail.com</a>
        </div>
        <div className="flex flex-col  xl:text-[1.5em] xl:w-[30%]">
        <p>FBDEVS</p>

        </div>
        
      </div>
      <div className=""><p>©FBDEVS</p></div>
    </div>
    </>
  )
}

export default App
