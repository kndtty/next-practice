import postgres from 'postgres'
const sql = postgres(
  process.env.POSTGRES_URL ?? "",
  {

  }
);

async function listInvoices(sql: postgres.Sql) {
  return await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  ;
}

export async function GET() {
  return await sql.begin(async sql => {
    const invoices = await listInvoices(sql);
    return Response.json({ message: invoices });
  }).catch((error) => {
    return Response.json({ error }, { status: 500 });
  })
}

