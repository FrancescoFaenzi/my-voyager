> _"Qual é o seu nome?" — 《Your Name.》 (2016)_

### Destaques

- 🌙 **Suporte ao :kimi: Kimi**: Pastas, Exportar conversas, Largura de leitura confortável, Formatação de leitura, Enviar com Ctrl/⌘+Enter, Salvamento automático de rascunho, Contador do rascunho, Citar respostas e Verificação do site agora funcionam no Kimi; os nove plugins vêm desativados por padrão, então ative os que quiser nos plugins.
- 🔒 **As pastas ficam com a própria conta**: com o isolamento de contas ativado, trocar de conta Google mantém as pastas, a sincronização com o Drive e as instruções de pasta do Pasta como Projeto com a conta em uso; quando o Voyager não sabe qual conta está conectada na página, ele avisa em vez de ficar carregando.
- 📁 **:gemini: Novo chat numa pasta sem recarregar**: com Pasta como Projeto ativado, **Novo chat nesta pasta** abre na hora um chat novo com essa pasta já escolhida.

### Novidades

- **Verificação do site** _(desativado por padrão)_: quando o Voyager quebra em um site, ative **Verificação do site** nos plugins para ver quantos dos elementos da página de que o Voyager depende foram encontrados e escolher a parte que parece quebrada; o relatório não traz conteúdo dos chats e fica pronto para copiar ou anexar a uma issue.
- **Exportação do :claude: Claude e do :deepseek: DeepSeek** _(desativado por padrão)_: ative **Exportar conversas** nos plugins para salvar uma conversa inteira em um arquivo; conversas longas são lidas do começo ao fim, e o Voyager avisa quando não conseguiu ler tudo.
- **Voyager no celular**: no Firefox para Android, as linhas do tempo, a exportação do Gemini e do ChatGPT e os efeitos visuais funcionam normalmente; os outros plugins e as configurações de pastas mostram **Ainda não está disponível no celular** e mantêm sua escolha para o computador; a sincronização com o Google Drive não está disponível no celular.
- **:chatgpt: Tarefas da ponte local em paralelo** _(desativado por padrão)_: ative **Executar tarefas em paralelo** no cartão da ponte local do popup e várias tarefas do Voyager CLI rodam ao mesmo tempo, cada uma na própria aba do ChatGPT, em vez de esperar atrás de uma resposta longa; requer uma CLI do voyager mais nova que a 0.4.0.

### Correções

- **:gemini: Gems recentes de volta à barra lateral**: agora que o Gemini guarda os Gems dentro de um menu, os Gems recentes aparecem na própria seção **Gems** da barra lateral.
- **:chatgpt: Exportar sem entrar na conta**: conversas do ChatGPT abertas sem login (links `/uc/`) agora mostram o botão Exportar e são exportadas normalmente.
- **:aistudio: Layout das pastas no AI Studio**: o título Pastas se alinha aos títulos de seção da navegação, e os prompts ficam recuados sob a pasta.
- **:aistudio: Ajustes do AI Studio na hora**: **Ocultar conversas arquivadas** no popup agora controla o próprio AI Studio, e ligar ou desligar as pastas não exige mais recarregar.
- **:chatgpt: Arrastar chats para pastas**: arrastar um chat na barra lateral do ChatGPT não é mais interrompido no meio.
- **Ocultar conversas arquivadas**: vale assim que é ligado e nunca esconde chats que não estão numa pasta.
- **:claude: Nova barra lateral do Claude**: o Voyager volta a encontrar a barra lateral do Claude depois do redesenho.
- **:chatgpt: Troca de modelo da ponte local**: o Voyager CLI só informa a troca de modelo depois que o menu fecha e o modelo realmente muda.
- **Efeito sakura no Firefox**: não mostra mais um bloco de fundo em páginas escuras.
