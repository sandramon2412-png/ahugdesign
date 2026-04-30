create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Anyone (including anon) can submit a message
create policy "Anyone can submit contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (
  char_length(name) between 1 and 100
  and char_length(email) between 3 and 255
  and char_length(message) between 10 and 2000
  and (subject is null or char_length(subject) <= 200)
);

-- No public read access; only service role (server) can read
create policy "No public read"
on public.contact_messages
for select
to authenticated
using (false);
