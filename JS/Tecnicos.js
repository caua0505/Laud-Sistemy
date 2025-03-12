function generateTable() {
    const tbody = document.querySelector('#dynamic-table tbody');
    tbody.innerHTML = '';  // Limpa a tabela anterior

    // Lista de campos que irão compor o laudo
    const campos = [
        'Número do Laudo',
        'Responsável',
        'Observações',
        'Empresa / Proprietário',
        'Placa ou Identificação',
        'Fabricante do Equipamento',
        'Ano de Fabricação',
        'Pressão de Trabalho (kgf/cm³)',
        'Pressão de Teste (kgf/cm³)',
        'Fabricante',
        'Material',
        'Aplicação',
        'Validade',
        'Diâmetro',
        'Identificação / Série',
        'Mangote (Aprovado ou Reprovado)'
    ];

    // Preenche a tabela com campos e inputs
    campos.forEach(campo => {
        const row = document.createElement('tr');
        const tdCampo = document.createElement('td');
        const tdInput = document.createElement('td');
        const input = document.createElement('input');

        tdCampo.textContent = campo;
        input.type = 'text';
        input.placeholder = 'Digite aqui';

        tdInput.appendChild(input);
        row.appendChild(tdCampo);
        row.appendChild(tdInput);
        tbody.appendChild(row);
    });
}


function generateReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Cabeçalho
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('TESTE DE ESTANQUEIDADE', 105, 15, null, null, 'center');
    doc.setFontSize(12);
    doc.text('VERIFICAÇÃO DE ESTANQUEIDADE EM MANGOTES FLEXÍVEIS', 105, 22, null, null, 'center');

    // Dados do relatório
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Nº ---`, 15, 30);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 150, 30);
    doc.line(15, 35, 195, 35);

    let yPosition = 45;

    const fields = [
        { label: 'Responsável', separator: false },
        { label: 'Observações', separator: true },
        { label: 'Empresa / Proprietário', separator: false },
        { label: 'Placa ou Identificação', separator: false },
        { label: 'Fabricante do Equipamento', separator: false },
        { label: 'Ano de Fabricação', separator: false },
        { label: 'Pressão de Trabalho (kgf/cm³)', separator: false },
        { label: 'Pressão do Teste (kgf/cm³)', separator: false },
        { label: 'Fabricante', separator: false },
        { label: 'Material', separator: false },
        { label: 'Aplicação', separator: false },
        { label: 'Validade', separator: false },
        { label: 'Diâmetro', separator: false },
        { label: 'Pressão do Teste', separator: false },
        { label: 'Ano de Fabricação', separator: false },
        { label: 'Identificação / Série', separator: false },
    ];

    // Preenchendo os campos
    fields.forEach(({ label, separator }) => {
        doc.text(`${label}: ---`, 15, yPosition);
        yPosition += 10;
        if (separator) {
            doc.line(15, yPosition, 195, yPosition);
            yPosition += 5;
        }
    });

    // Linha separando "Pressão do Teste" e "Fabricante"
    yPosition += 5; // Ajustando a posição
    doc.line(15, yPosition, 195, yPosition); 
    yPosition += 5;

    // Adicionando o texto "OBS." antes da linha
    doc.setFontSize(10);
    doc.text('OBS.: OS MANGOTES SÃO INTERLIGADOS UNS AOS OUTROS, SENDO DE 5 METROS DE COMPRIMENTO.', 15, yPosition);
    doc.text('O TESTE FOI REALIZADO COM MANGOTES UNIDOS.', 15, yPosition + 8);

    // Linha após as observações
    yPosition += 20;
    doc.line(15, yPosition, 195, yPosition);
    yPosition += 5;

    // Mangote (Aprovado ou Reprovado)
    doc.setFontSize(12)
    doc.text('Mangote (Aprovado ou Reprovado): ---', 15, yPosition);

    yPosition += 25;

    // Assinatura do Responsável Técnico
    doc.line(60, yPosition, 150, yPosition);
    doc.text('Assinatura do Responsável Técnico', 105, yPosition + 5, null, null, 'center');

    // Salvando o PDF
    doc.save('laudo_tecnico.pdf');
}
