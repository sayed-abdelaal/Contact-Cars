import { useState } from 'react'

import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { Drawer } from '@/components/ui/Drawer'
import { EmptyState } from '@/components/ui/EmptyState'
import { Input } from '@/components/ui/Input'
import { Link } from '@/components/ui/Link'
import { Modal } from '@/components/ui/Modal'
import { Select } from '@/components/ui/Select'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tabs } from '@/components/ui/Tabs'
import { formatCurrency } from '@/lib/format'

const financeOptions = [
  { label: '12 months', value: '12' },
  { label: '24 months', value: '24' },
  { label: '36 months', value: '36' },
  { label: '48 months', value: '48' },
]

export function PrimitiveShowcase() {
  const [selectedChip, setSelectedChip] = useState('family')
  const [term, setTerm] = useState('36')
  const [monthlyBudget, setMonthlyBudget] = useState('18000')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="section-stack">
      <SectionHeader
        eyebrow="Primitive Layer"
        title="Reusable building blocks for automotive-finance prototype work."
        description="Each primitive below is wired to the semantic token system and shown with a simple demo so future pages can compose them without hardcoding styles."
        actions={<Button variant="outline">Export Patterns</Button>}
      />

      <Card
        title="Button"
        description="Primary action hierarchy, loading behavior, selection, and tone variants."
        footer={<Badge tone="info">Hover, focus, active, disabled, loading</Badge>}
      >
        <div className="flex flex-wrap gap-12">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="success">Approved</Button>
          <Button variant="danger">Error State</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button selected variant="outline">
            Selected
          </Button>
        </div>
      </Card>

      <Card
        title="Input and Select"
        description="Field primitives with hint, success, error, and disabled states."
      >
        <div className="grid gap-20 md:grid-cols-2">
          <Input
            label="Monthly budget"
            value={monthlyBudget}
            onChange={(event) => setMonthlyBudget(event.target.value)}
            leading="EGP"
            hint="Use this for early affordability experiments."
          />
          <Select
            label="Preferred term"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            options={financeOptions}
            placeholder="Choose a term"
            success="Installment plans available for this duration."
          />
          <Input
            label="National ID"
            placeholder="Enter ID number"
            error="Validation copy lives in the field primitive."
          />
          <Select
            label="Down payment strategy"
            disabled
            value=""
            options={[{ label: 'Pay minimum upfront', value: 'minimum' }]}
            placeholder="Disabled example"
            hint="Use disabled when the next step depends on another selection."
          />
        </div>
      </Card>

      <Card
        title="Tabs"
        description="Selected and disabled navigation states for compact subviews."
      >
        <Tabs
          defaultValue="overview"
          items={[
            {
              value: 'overview',
              label: 'Overview',
              badge: '01',
              content: (
                <p className="text-body-md text-text-secondary">
                  Overview tabs can hold summary content for a listing,
                  calculator, or eligibility state.
                </p>
              ),
            },
            {
              value: 'costs',
              label: 'Cost breakdown',
              badge: formatCurrency(Number(monthlyBudget) * Number(term || 1)),
              content: (
                <p className="text-body-md text-text-secondary">
                  Monthly budget {formatCurrency(Number(monthlyBudget) || 0)} across{' '}
                  {term} months gives the team a quick placeholder for total cost
                  framing.
                </p>
              ),
            },
            {
              value: 'dealer',
              label: 'Dealer handoff',
              disabled: true,
              content: null,
            },
          ]}
        />
      </Card>

      <div className="grid gap-20 lg:grid-cols-2">
        <Card title="Chip" description="Compact filters and segment selectors.">
          <div className="flex flex-wrap gap-12">
            {[
              ['family', 'Family'],
              ['commuter', 'Commuter'],
              ['suv', 'SUV'],
            ].map(([value, label]) => (
              <Chip
                key={value}
                selected={selectedChip === value}
                tone={value === 'suv' ? 'accent' : value === 'commuter' ? 'brand' : 'success'}
                onClick={() => setSelectedChip(value)}
              >
                {label}
              </Chip>
            ))}
          </div>
        </Card>

        <Card title="Badge" description="Status and semantic annotation tokens.">
          <div className="flex flex-wrap gap-12">
            <Badge>Neutral</Badge>
            <Badge tone="info">Info</Badge>
            <Badge tone="success">Success</Badge>
            <Badge tone="warning">Warning</Badge>
            <Badge tone="error">Error</Badge>
            <Badge tone="accent">Offer highlight</Badge>
          </div>
        </Card>
      </div>

      <Card
        title="Card"
        description="Flexible content container for product, finance, and review modules."
      >
        <div className="grid gap-16 lg:grid-cols-3">
          <Card
            title="Default card"
            description="Base surface for most product content."
            className="h-full"
          >
            <Badge tone="info">Default</Badge>
          </Card>
          <Card
            title="Selected card"
            description="Use for shortlisted offers or chosen filters."
            selected
            className="h-full"
          >
            <Badge tone="success">Selected</Badge>
          </Card>
          <Card
            title="Finance card"
            description="Subtle semantic emphasis for payment-related summaries."
            tone="finance"
            interactive
            className="h-full"
          >
            <Badge tone="accent">Finance</Badge>
          </Card>
        </div>
      </Card>

      <Card title="SectionHeader and Link" description="Page-level structure and inline navigation actions.">
        <div className="grid gap-24">
          <SectionHeader
            eyebrow="Inline Example"
            title="Compare instalment offers with confidence."
            description="Section headers carry the strongest type hierarchy and optional actions without requiring page-specific styling."
            actions={<Button size="sm">Review offer flow</Button>}
          />
          <div className="flex flex-wrap gap-16">
            <Link to="/car-instalment/v1">Internal route link</Link>
            <Link href="https://contactcars.com" external tone="secondary">
              External reference
            </Link>
            <Link href="#" tone="muted">
              Muted link
            </Link>
            <Link href="#" disabled>
              Disabled link
            </Link>
          </div>
        </div>
      </Card>

      <Card
        title="Modal and Drawer"
        description="Controlled overlay primitives for secondary review flows."
      >
        <div className="flex flex-wrap gap-12">
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>
            Open Drawer
          </Button>
        </div>
      </Card>

      <Card
        title="EmptyState"
        description="Use empty states to teach the user what the next action should be."
      >
        <EmptyState
          icon="⊕"
          title="No shortlisted cars yet"
          description="As users compare instalment plans, shortlisted offers can appear here with saved down payment and monthly budget context."
          action={<Button>Browse offers</Button>}
          secondaryAction={<Button variant="ghost">Import comparison idea</Button>}
        />
      </Card>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Eligibility review modal"
        description="Use modal patterns sparingly for concise secondary decisions."
        footer={<Button onClick={() => setIsModalOpen(false)}>Understood</Button>}
      >
        <EmptyState
          title="Bring focused details into view"
          description="Modals work best when the user needs a brief, self-contained confirmation or summary without leaving the current prototype surface."
        />
      </Modal>

      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Instalment details drawer"
        description="Drawers are useful for deeper supporting information that should stay close to the main page."
        footer={<Button onClick={() => setIsDrawerOpen(false)}>Close drawer</Button>}
      >
        <div className="grid gap-16">
          <Card tone="muted" title="Estimated monthly payment">
            <p className="text-display-lg font-bold text-finance-payment">
              {formatCurrency(Number(monthlyBudget) || 0)}
            </p>
          </Card>
          <Input
            label="Dealer follow-up note"
            placeholder="Ask for a revised down payment proposal"
            hint="This content stays inside the shared primitive system."
          />
        </div>
      </Drawer>
    </div>
  )
}
