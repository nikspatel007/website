import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { teamMembers } from '@/data/team'
import { cn } from '@/lib/utils'

interface TeamGridProps {
  showAll?: boolean
  className?: string
}

export function TeamGrid({ showAll = true, className }: TeamGridProps) {
  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 4)

  return (
    <div
      className={cn(
        'grid gap-8 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {displayedMembers.map((member, index) => (
        <ScrollReveal key={member.id} delay={index * 0.1}>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl font-bold text-primary-300">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary-600">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {member.bio}
                </p>
                <div className="mt-4 flex gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-colors hover:text-primary-600"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-colors hover:text-primary-600"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  )
}
