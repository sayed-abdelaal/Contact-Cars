import {
  Badge,
  Button,
  Card,
  Chip,
  EmptyState,
  Input,
  Link,
  PrimitiveShowcase,
  SectionHeader,
  Select,
  Tabs,
} from '@/components/ui'
import {
  colorTokenGroups,
  layoutTokens,
  radiusScale,
  shadowScale,
  spacingScale,
  typographyScale,
} from '@/data/designSystem'

function TokenSection({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="section-stack">
      <SectionHeader title={title} description={description} />
      {children}
    </section>
  )
}

function MetaRow({
  name,
  cssVar,
  value,
}: {
  name: string
  cssVar: string
  value: string
}) {
  return (
    <div className="grid gap-4 rounded-xl border border-border-default bg-surface-primary p-12">
      <div className="flex items-center justify-between gap-12">
        <p className="text-label text-text-primary">{name}</p>
        <Badge>{value}</Badge>
      </div>
      <p className="text-body-sm text-text-muted">{cssVar}</p>
    </div>
  )
}

export function DesignSystemPage() {
  return (
    <div className="section-stack">
      <SectionHeader
        eyebrow="Design System"
        title="Internal source of truth for the Contact Cars prototype UI system."
        description="This page documents semantic tokens, layout scales, primitives, and important states so the team can review one consistent system before evolving the versioned Car Instalment flows."
        actions={<Button variant="outline">Review Foundation</Button>}
      />

      <TokenSection
        title="Color Tokens"
        description="All semantic color tokens grouped by role. Use these names in components instead of introducing one-off visual colors."
      >
        <div className="grid gap-20">
          {colorTokenGroups.map((group) => (
            <Card
              key={group.title}
              title={group.title}
              description={group.description}
            >
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                {group.tokens.map((token) => (
                  <div
                    key={token.name}
                    className="grid gap-10 rounded-xl border border-border-default bg-surface-primary p-12"
                  >
                    <div
                      className="h-64 rounded-lg border border-border-default shadow-subtle"
                      style={{ backgroundColor: `var(${token.cssVar})` }}
                    />
                    <div className="grid gap-4">
                      <p className="text-label text-text-primary">{token.name}</p>
                      <p className="text-body-sm text-text-muted">{token.cssVar}</p>
                      <p className="text-body-sm text-text-secondary">{token.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </TokenSection>

      <TokenSection
        title="Typography Scale"
        description="Type styles for hierarchy, labels, and readable finance messaging."
      >
        <Card>
          <div className="grid gap-12">
            {typographyScale.map((item) => (
              <div
                key={item.name}
                className="grid gap-8 rounded-xl border border-border-default bg-surface-primary p-16 md:grid-cols-[180px_1fr_220px]"
              >
                <div>
                  <p className="text-label text-text-primary">{item.name}</p>
                  <p className="text-body-sm text-text-muted">{item.cssVar}</p>
                </div>
                <div
                  className="text-text-primary"
                  style={{
                    fontFamily: item.name.includes('display') || item.name.startsWith('h')
                      ? 'var(--token-font-family-display)'
                      : 'var(--token-font-family-base)',
                    fontSize: `var(${item.cssVar})`,
                    lineHeight: item.lineHeight,
                    fontWeight: item.weight,
                  }}
                >
                  Car instalment UI sample
                </div>
                <div className="text-body-sm text-text-secondary">
                  {item.size} / {item.lineHeight} - {item.weight}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </TokenSection>

      <TokenSection
        title="Spacing Scale"
        description="Shared spacing rhythm for shells, components, and feature sections."
      >
        <Card>
          <div className="grid gap-10">
            {spacingScale.map((item) => (
              <div
                key={item.name}
                className="grid items-center gap-12 rounded-xl border border-border-default bg-surface-primary p-12 md:grid-cols-[90px_120px_1fr]"
              >
                <p className="text-label text-text-primary">{item.name}</p>
                <p className="text-body-sm text-text-muted">{item.value}</p>
                <div className="rounded-full bg-surface-muted p-8">
                  <div
                    className="h-12 rounded-full bg-brand-primary"
                    style={{ width: `var(${item.cssVar})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </TokenSection>

      <TokenSection
        title="Radius, Shadows, and Layout"
        description="Shape, elevation, width, breakpoint, and motion tokens used across the prototype."
      >
        <div className="grid gap-20 xl:grid-cols-2">
          <Card title="Radius" description="Rounded corners for controls, cards, and pills.">
            <div className="grid gap-12">
              {radiusScale.map((item) => (
                <div
                  key={item.name}
                  className="grid items-center gap-12 md:grid-cols-[140px_120px_1fr]"
                >
                  <p className="text-label text-text-primary">{item.name}</p>
                  <p className="text-body-sm text-text-muted">{item.value}</p>
                  <div
                    className="h-48 border border-border-default bg-surface-muted"
                    style={{ borderRadius: `var(${item.cssVar})` }}
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card title="Shadows" description="Elevation system for subtle, card, hover, and modal layers.">
            <div className="grid gap-16 md:grid-cols-2">
              {shadowScale.map((item) => (
                <div key={item.name} className="grid gap-8">
                  <div
                    className="h-88 rounded-xl border border-border-default bg-surface-primary"
                    style={{ boxShadow: `var(${item.cssVar})` }}
                  />
                  <p className="text-label text-text-primary">{item.name}</p>
                  <p className="text-body-sm text-text-muted">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Container Widths" description="Content widths for shells, reading lanes, and panels.">
            <div className="grid gap-12">
              {layoutTokens.containers.map((item) => (
                <MetaRow
                  key={item.name}
                  name={item.name}
                  cssVar={item.cssVar}
                  value={item.value}
                />
              ))}
            </div>
          </Card>

          <Card title="Breakpoints and Motion" description="Responsive thresholds and movement timing for calm, predictable UI.">
            <div className="grid gap-20">
              <div className="grid gap-12">
                {layoutTokens.breakpoints.map((item) => (
                  <MetaRow
                    key={item.name}
                    name={item.name}
                    cssVar={item.cssVar}
                    value={item.value}
                  />
                ))}
              </div>
              <div className="grid gap-12">
                {layoutTokens.motion.map((item) => (
                  <MetaRow
                    key={item.name}
                    name={item.name}
                    cssVar={item.cssVar}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </TokenSection>

      <TokenSection
        title="Important Component States"
        description="Quick state coverage for the most reused interactions before the deeper component demos below."
      >
        <div className="grid gap-20">
          <Card title="Buttons, Links, and Badges" description="Primary interaction and supporting label states.">
            <div className="grid gap-20">
              <div className="flex flex-wrap gap-12">
                <Button>Default</Button>
                <Button variant="outline">Hover-ready</Button>
                <Button selected variant="outline">
                  Selected
                </Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Error</Button>
              </div>
              <div className="flex flex-wrap gap-12">
                <Link to="/car-instalment/v1">Internal link</Link>
                <Link href="#" tone="muted">
                  Muted
                </Link>
                <Link href="#" disabled>
                  Disabled
                </Link>
                <Badge>Neutral</Badge>
                <Badge tone="info">Info</Badge>
                <Badge tone="success">Success</Badge>
                <Badge tone="warning">Warning</Badge>
                <Badge tone="error">Error</Badge>
              </div>
            </div>
          </Card>

          <Card title="Inputs, Selects, Chips, Cards, and Tabs" description="Validation, disabled, selected, and hierarchy states.">
            <div className="grid gap-20">
              <div className="grid gap-16 md:grid-cols-2">
                <Input label="Default input" placeholder="Enter monthly budget" hint="Neutral helper text" />
                <Input label="Success input" defaultValue="18,000" success="Looks valid for this prototype step." />
                <Input label="Error input" defaultValue="ABC" error="Use numeric values only." />
                <Select
                  label="Disabled select"
                  disabled
                  value=""
                  placeholder="Unavailable"
                  options={[{ label: 'Unavailable', value: 'none' }]}
                />
              </div>
              <div className="flex flex-wrap gap-12">
                <Chip>Default chip</Chip>
                <Chip tone="brand">Brand chip</Chip>
                <Chip tone="accent">Accent chip</Chip>
                <Chip tone="success" selected>
                  Selected chip
                </Chip>
              </div>
              <div className="grid gap-16 lg:grid-cols-3">
                <Card title="Default card" description="Base state card." />
                <Card title="Selected card" description="Selected state card." selected />
                <Card title="Interactive finance card" description="Hover-emphasis card." tone="finance" interactive />
              </div>
              <Tabs
                defaultValue="default"
                items={[
                  {
                    value: 'default',
                    label: 'Default',
                    content: <p className="text-body-md text-text-secondary">Default active tab content.</p>,
                  },
                  {
                    value: 'selected',
                    label: 'Selected',
                    badge: 'State',
                    content: <p className="text-body-md text-text-secondary">Selected tabs should stay obvious and stable.</p>,
                  },
                  {
                    value: 'disabled',
                    label: 'Disabled',
                    disabled: true,
                    content: null,
                  },
                ]}
              />
            </div>
          </Card>

          <Card title="Empty States" description="Teaching states that guide the next action instead of simply saying nothing exists.">
            <EmptyState
              icon="+"
              title="No saved prototype modules"
              description="Use empty states to explain the next best action and reinforce how the system should behave."
              action={<Button>Start module</Button>}
              secondaryAction={<Button variant="ghost">Read guidance</Button>}
            />
          </Card>
        </div>
      </TokenSection>

      <TokenSection
        title="Primitive Library"
        description="Full interactive demo coverage for the current primitive layer."
      >
        <PrimitiveShowcase />
      </TokenSection>
    </div>
  )
}
